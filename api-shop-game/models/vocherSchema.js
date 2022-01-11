import mongoose from 'mongoose';

var vocherSchema = new mongoose.Schema({
    code: String,
    discount: Number,
    list_game: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
    }],
    create_date: Date,
    time_expired: Date,
    status: Boolean
}, {
    versionKey: false
})

const Vocher = mongoose.model("Vocher", vocherSchema, "vochers")

export default Vocher