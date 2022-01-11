import asyncHandler from "express-async-handler";
import Order from "../models/orderSchema.js";

const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({})
        .populate("cart")
        .populate("user")
        .sort("paid_at")
    res.json(orders);
});

const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.Id)
        .populate("cart")
        .populate("user")
    res.json(order);
});

const getOrderByStatus = asyncHandler(async (req, res) => {
    const order = await Order.find({ status: req.params.id })
        .populate("cart")
        .populate("user")
        .sort("paid_at")
    res.json(order);
});

const getReportSellGames = asyncHandler(async (req, res) => {
    const report = []
    const order = await Order.find({ status: "succeeded" })
        .sort("paid_at")
        .select("cart")
        .populate({ path: "cart", select: "products", populate: "products.product" })
    order.map((o) => {
        o.cart.products.map((p) => {
            if (p.keys != null) {
                report.push({
                    product: p.product.name,
                    count: p.keys.length
                })
            }
        })
    });
    res.json(report);
});

export { getOrder, getOrders, getReportSellGames, getOrderByStatus };