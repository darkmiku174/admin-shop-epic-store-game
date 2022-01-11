import mongoose from 'mongoose';

var gameCountSchema = new mongoose.Schema({
    keys: Array,
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    },
    quantity: Number
}, {
    versionKey: false
})

export default gameCountSchema