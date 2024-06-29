import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
}, { timestamps: true });

const productModel = mongoose.model('Product', productSchema);

export default productModel;