import { login,register } from "../controllers/auth.js";

const routes=(app)=>{
    // auth routes
    app.route('/auth/register')
       .post(register);

    app.route('/auth/login')
       .post(login);
};
export default routes;