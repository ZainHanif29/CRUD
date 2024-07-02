import postModel from '../models/postModel.js'

class PostController {
    static creatPost = async (req, res) => {
        try {
            const { title, description } = req.body;
            const image = req.file ? req.file.filename : null;

            if (!title || !description || !image) {
                return res.status(203).json({ message: "All fields are requireds 😊" })
            }
            const data = await postModel({ title, description, image, userID: req._id });
            await data.save();
            return res.status(200).json({ message: "Add Post 👍" })
        } catch (error) {
            return res.status(500).json({ message: "Server Error 😊", error })
        }
    };

    static readPost = async (req , res) => {
        try {
           const userID = req._id;
           const data = await postModel.find({userID})
           return res.status(200).json({message: data}) 
        } catch (error) {
            return res.status(500).json({message:"Server Error 😊",error})
        }
    }

    static updatePost = async (req ,res) =>{
        try {
            const {title , description} = req.body;
            const image = req.file ? req.file.filename : null;

            if (!title || !description || !image) {
                return res.status(203).json({ message: "All fields are requireds 😊" })
            }

            const data = await postModel({title,description,image})
            await data.update();
            return res.status(200).json({ message: "Update Post 👍" })
        } catch (error) {
            return res.status(500).json({message:"Server Error 😊",error}) 
        }
    }


};
export default PostController;