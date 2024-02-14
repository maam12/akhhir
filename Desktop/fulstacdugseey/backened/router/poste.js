


import express from 'express';
import { createPost, deletePost, getUserPosts, updatePost } from '../controller/PostController.js';
import {authenticate} from "../midlweres/authmidlwere.js"

import upload from '../midlweres/upload.js';



const postRouter = express.Router();



postRouter.post('/create-post', authenticate,upload.single("image") ,createPost )

postRouter.get('/get-user-posts', authenticate, getUserPosts);
postRouter.delete('/delete-post/:id', authenticate, deletePost);
postRouter.post('/update-post/:id', authenticate, upload.single('image'), updatePost);
export default postRouter;