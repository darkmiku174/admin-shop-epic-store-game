import asyncHandler from "express-async-handler";
import Cart from "../models/cartSchema.js";

const getCarts = asyncHandler(async (req, res) => {
    const carts = await Cart.find({})
        .populate("user")
        .populate("products.product")
    res.json(carts);
});

const getCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.Id)
        .populate("user")
        .populate("products.product")
    res.json(cart);
});

const deleteCart = asyncHandler(async (req, res) => {
    const cart = await User.findByIdAndDelete(req.params.id)
    if (cart) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "User not found" })
    }
});

export { getCart, getCarts, deleteCart };