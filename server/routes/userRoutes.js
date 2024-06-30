import express from 'express'
import UserController from '../controllers/userController.js'
import PostController from '../controllers/postController.js'
import auth from '../middleware/authentication.js';
import  upload  from '../middleware/multer.js';

const router = express.Router();

router.post('/register', UserController.register)
router.post('/login', UserController.login)


router.post('/post', auth,upload.single('file'),PostController.creatPost)
router.get('/post', auth,PostController.readPost)

export default router;