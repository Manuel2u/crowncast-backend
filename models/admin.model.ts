import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    phone: {
        type: String,
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.models["Admin"] || mongoose.model("Admin", AdminSchema);