import asyncHandler from "express-async-handler";
import Game from "../models/gameSchema.js";
import Vocher from "../models/vocherSchema.js";

const getVocherList = asyncHandler(async (req, res) => {
    const vochers = await Vocher.find({})
    res.json(vochers);
});

const getVocher = asyncHandler(async (req, res) => {
    const vocher = await Vocher.findById(req.params.Id)
        .populate("list_game")
    res.json(vocher);
});

const addVocher = asyncHandler(async (req, res) => {
    const vocher = await Vocher.create(req.body);
    res.json(vocher);
});

export { getVocherList, getVocher, addVocher };