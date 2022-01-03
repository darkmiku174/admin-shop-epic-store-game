import asyncHandler from "express-async-handler";
import Collection from "../models/collectionSchema.js";

const getColections = asyncHandler(async (req, res) => {
    const collections = await Collection.find({})
        .populate({
            path: "list_game"
        })
    res.json(collections);
});

const getCollection = asyncHandler(async (req, res) => {
    const collection = await Collection.findById(req.params.Id);
    res.json(collection);
});


const addCollection = asyncHandler(async (req, res) => {
    const collection = await Collection.create(req.body);
    res.json(collection);
});

const deleteCollection = asyncHandler(async (req, res) => {
    const collection = await Collection.findByIdAndDelete(req.params.id)
    if (collection) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Product not found" })
    }
});

export { getColections, addCollection, deleteCollection };