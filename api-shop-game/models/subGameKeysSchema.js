import mongoose from 'mongoose';

var keysSchema = new mongoose.Schema({
    code: String,
    status: String
}, {
    versionKey: false
})

export default keysSchema