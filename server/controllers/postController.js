import productModel from "../models/postModel.js";

class PostController {
    static creatPost = async (req, res) => {
        try {
            const { title, description, image } = req.body;
            if (!title || !description || !image) {
                return res.status(400).json({ message: "All fields are required 😊" })
            }
            const data = await productModel({ title, description, image, userID: req._id });
            await data.save();
            return res.status(200).json({ message: "Add Post 👍" })
        } catch (error) {
            return res.status(500).json({ message: "Server Error 😊", error })
        }
    };
};
export default PostController;