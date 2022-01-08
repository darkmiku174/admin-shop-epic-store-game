import mongoose from 'mongoose';
import gameCountSchema from './subCartGameCountSchema.js';

var cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [gameCountSchema],
    status: Boolean
}, {
    versionKey: false
})

const Cart = mongoose.model("Cart", cartSchema, "carts")

export default Cart
