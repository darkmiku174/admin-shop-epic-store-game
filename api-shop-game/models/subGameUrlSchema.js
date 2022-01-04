import mongoose from 'mongoose';

var urlSchema = new mongoose.Schema({
    url: String,
    type: String
}, {
    versionKey: false
})

export default urlSchema