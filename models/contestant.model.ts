import mongoose, { Schema } from "mongoose";

const ContestantSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    votes: {
        type: Number,
        default: 0,
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event",
    },
    category: {
        type: String,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.models["Contestant"] || mongoose.model("Contestant", ContestantSchema);