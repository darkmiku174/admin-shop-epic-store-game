import mongoose from 'mongoose';

var gameCountSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    },
    quantity: Number
}, {
    versionKey: false
})

export default gameCountSchema