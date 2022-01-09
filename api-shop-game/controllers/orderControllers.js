import asyncHandler from "express-async-handler";
import Order from "../models/orderSchema.js";

const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({})
        .populate("cart")
        .populate("user")
    res.json(orders);
});

const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.Id)
        .populate("cart")
        .populate("user")
    res.json(order);
});


// const addCollection = asyncHandler(async (req, res) => {
//     const collection = await Collection.create(req.body);
//     res.json(collection);
// });

// const deleteCollection = asyncHandler(async (req, res) => {
//     const collection = await Collection.findByIdAndDelete(req.params.id)
//     if (collection) {
//         res.status(200).json({ message: "Delete success" })
//     } else {
//         res.status(404).json({ message: "Collection not found" })
//     }
// });

export { getOrder, getOrders };