import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
    first_name: String,
    birthday: String,
    last_name: String,
    active: Boolean,
    email: String,
    phone_number: String,
    facebook_id: String,
    google_id: String,
    email_verification: Boolean
}, {
    versionKey: false
})

const User = mongoose.model("User", userSchema, "users")

export default User
