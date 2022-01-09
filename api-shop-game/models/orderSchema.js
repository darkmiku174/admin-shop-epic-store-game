import mongoose from 'mongoose';

var orderSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: String,
    payment_method: {
        method: String,
        detail: {}
    },
    paid_at: Date,
    cancelled_at: Date
}, {
    versionKey: false
})

const Order = mongoose.model("Order", orderSchema, "orders")

export default Order