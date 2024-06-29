import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

class UserController {
    static register = async (req, res) => {
        try {
            const { fullName, email, password, repeatPassword } = req.body;
            if (!fullName || !email || !password || !repeatPassword) {
                return res.status(400).json({ message: "All fields are required 😊" });
            }
            if (password !== repeatPassword) {
                return res
                    .status(400)
                    .json({ message: "Password & Confirm Password not match 😊" });
            }
            const user = await userModel.findOne({ email });
            if (user) {
                return res.status(400).json({ message: "This Email already exit 😊" });
            }
            const hashPassword = await bcrypt.hash(password, 10);
            const User = await userModel({
                fullName,
                email,
                password: hashPassword,
                repeatPassword,
            });
            await User.save();
            return res.status(200).json({ message: "User Register 👍" });
        } catch (error) {
            return res.status(500).json({message:"Server Error 😊",error})
        }
    };

    static login = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "All fields are required 😊" });
            }
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "This Email does not exit 😊" });
            }
            const hashPassword = await bcrypt.compare(password, user.password);
            if (email == user.email && hashPassword) {
                const token = jwt.sign({userID:user._id},process.env.JWT_TOKEN,{expiresIn:process.env.JWT_TOKEN_EXP})
                return res.status(200).cookie("token",token).json({ message: "User Login 👍" , 'token':token});
            }
            return res.status(400).json({ message: "Incorrect Password 👎" });
        } catch (error) {
            return res.status(500).json({message:"Server Error 😊",error})
        }
    };
}

export default UserController;
