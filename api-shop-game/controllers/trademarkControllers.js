import asyncHandler from "express-async-handler";
import Trademark from "../models/trademarkSchema.js";

// const getTrademarkList = asyncHandler(async (req, res) => {
//     const trademarks = await Trademark.find({});
//     res.json(trademarks);
// });

// const getTrademark = asyncHandler(async (req, res) => {
//     const trademark = await Trademark.findById(req.params.Id);
//     res.json(trademark);
// });

// const createTradeamark = asyncHandler(async (req, res) => {
//     const trademark = await Trademark.create(req.body)
//     res.json(trademark)
// });

// const deleteTrademark = asyncHandler(async (req, res) => {
//     const trademark = await Trademark.findByIdAndDelete(req.params.id)
//     if (trademark) {
//       res.status(200).json({message: "Delete success"})
//     } else {
//       res.status(404).json({message: "Trademark not found"})
//     }
//   })

export { getTrademarkList, getTrademark, createTradeamark, deleteTrademark };