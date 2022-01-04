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

export { getGameList, addGame, deleteGame, getGame };