import { fetchPosts,createPost, fetchPost, updatePost, deletePost } from "../controllers/Posts.js";
import { login,register } from "../controllers/auth.js";

const routes=(app)=>{
   //posts routes
   app.route('/posts')
      .get(fetchPosts)
      .post(createPost);
   //posts with id
   app.route('/posts/:PostID')
      .put(updatePost)
      .get(fetchPost)
      .delete(deletePost)
    // auth routes
    app.route('/auth/register')
       .post(register);

    app.route('/auth/login')
       .post(login);
};
export default routes;