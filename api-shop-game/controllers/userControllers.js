import asyncHandler from "express-async-handler";
import User from "../models/userSchema.js";

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
        .sort("last_name")
    res.json(users);
});

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.Id)
    res.json(user);
});


// const addCollection = asyncHandler(async (req, res) => {
//     const collection = await Collection.create(req.body);
//     res.json(collection);
// });

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if (user) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "User not found" })
    }
});

export { getUser, getUsers, deleteUser };