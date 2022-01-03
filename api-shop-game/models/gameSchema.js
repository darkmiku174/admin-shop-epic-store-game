import mongoose from 'mongoose';

var gameSchema = new mongoose.Schema({
    name: String,
    short_name: String,
    type: String,
    brief: String,
    description: String,
    developer: String,
    publisher: String,
    release_date: Date,
    platform: String,
    purchase_price: Number,
    sale_price: Number,
    tags: Array,
    keys: [{
        code: String,
        status: String
    }],
    images: [{
        url: String,
        type: String
    }],
    videos: [{
        url: String,
        type: String
    }],
    includes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "games"
    }],
    includes_in: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "games"
    }],
    vocher: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "vocher"
    }],
}, {
    versionKey: false
})

const Game = mongoose.model("Game", gameSchema, "games")

export default Game