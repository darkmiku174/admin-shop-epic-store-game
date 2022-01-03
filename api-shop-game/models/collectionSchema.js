import mongoose from 'mongoose';

var gameSchema = new mongoose.Schema({
    name: String,
    list_game: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "games"
    }],
}, {
    versionKey: false
})

const Collection = mongoose.model("Collection", collectionSchema, "collections")

export default Collection