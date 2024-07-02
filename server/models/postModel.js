import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String},
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
}, { timestamps: true });

const postModel = mongoose.model('Post', postSchema);

export default postModel;