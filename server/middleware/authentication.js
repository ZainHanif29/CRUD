import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(203).json({ message: 'User not authenticated' });
        }

        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decode) {
            return res.status(203).json({ message: 'Invalid token' });
        }

        req._id = decode.userID;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default auth;
