import asyncHandler from "express-async-handler";
import Game from "../models/gameSchema.js";

const getGameList = asyncHandler(async (req, res) => {
    const games = await Game.find({})
        // .populate({
        //     path: "ThuongHieu"
        // })
    res.json(games);
});

// const getProduct = asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.Id);
//     res.json(product);
// });

// const getProductLike = asyncHandler(async (req, res) => {
//     const products = await Product.find({ TenSP: { $regex: req.query.name } })
//     res.json(products)
// });

const addGame = asyncHandler(async (req, res) => {
    const game = await Game.create(req.body);
    res.json(game);
});

// const deleteProduct = asyncHandler(async (req, res) => {
//     const product = await Product.findByIdAndDelete(req.params.id)
//     if (product) {
//         res.status(200).json({ message: "Delete success" })
//     } else {
//         res.status(404).json({ message: "Product not found" })
//     }
// });

// const getProductByTrademark = asyncHandler(async (req, res) => {
//     const products = await Product.find({ ThuongHieu: req.params.id })
//     res.json(products)
// });
// export { getGameList, getProduct, getProductLike, addProduct, deleteProduct, getProductByTrademark };
export { getGameList, addGame};