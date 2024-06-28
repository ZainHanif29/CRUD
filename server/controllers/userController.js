import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

class UserController {
    static register = async (req, res) => {
        try {
            const { fullName, email, password, repeatPassword } = req.body;
            if (!fullName || !email || !password || !repeatPassword) {
                return res.status(400).json({ message: "All field are required 😊" });
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
            console.error(`Find Error 😊`, error);
        }
    };

    static login = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "All field are required 😊" });
            }
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "This Email not exit 😊" });
            }
            const hashPassword = await bcrypt.compare(password, user.password);
            if (email == user.email && hashPassword) {
                return res.status(200).json({ message: "User Login 👍" });
            }
            return res.status(400).json({ message: "Incorrect Password 👎" });
        } catch (error) {
            console.error(`Find Error 😊`, error);
        }
    };
}

export default UserController;
