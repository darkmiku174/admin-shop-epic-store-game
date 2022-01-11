import asyncHandler from "express-async-handler";
import Game from "../models/gameSchema.js";

const getGameList = asyncHandler(async (req, res) => {
    const games = await Game.find({})
    res.json(games);
});

const addGame = asyncHandler(async (req, res) => {
    const game = await Game.create(req.body)
    res.json(game);
});

const deleteGame = asyncHandler(async (req, res) => {
    const game = await Game.findByIdAndDelete(req.params.id)
    if (game) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Game not found" })
    }
});

const getGame = asyncHandler(async (req, res) => {
    const game = await Game.findById(req.params.Id)
        .populate("included_in")
        .populate("includes")
    res.json(game);
});

const updateKeyGame = asyncHandler(async (req, res) => {
    var keys = req.body.keys
    const game = await Game.updateOne(
        { _id: req.params.id },
        { $set: { keys: keys } }
    )
    res.json(game);
});

const updateDiscountGame = asyncHandler(async (req, res) => {
    const updateDiscount = await Game.updateOne(
        { _id: req.params.id },
        { $set: { discount_price: req.body.discount_price } }
    )
    res.json(updateDiscount)
});

const deleteKeyGame = asyncHandler(async (req, res) => {
    const key = await Game.findByIdAndDelete(req.params.id)
    if (key) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Key not found" })
    }
});

export { getGameList, addGame, deleteGame, getGame, updateKeyGame, deleteKeyGame, updateDiscountGame };