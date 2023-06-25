import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import './auth.css'
function Login() {
    const schema=yup.object().shape({
        Email:yup.string().required("Email is required"),
        Password:yup.string().required("Password is required"),
    });
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });
    const onSubmit=(myData)=> {
        console.log(myData)
    }
    return (
        <div className='Login'>
            <h2>Waptech Agri-connect Login</h2>
            <form className='loginDetails' onSubmit={handleSubmit(onSubmit)}>
                
                    <legend><b>User Login</b></legend>
                    <label>Email</label>
                    <input type="email" {...register("Email")}placeholder='Email' /><br /><br />
                    <p>{errors.Email?.message}</p>
                    <label>Password</label>
                    <input type="password" {...register("Password")} placeholder='password' /><br /><br />
                    <p>{errors.Password?.message}</p>
                    <div className='loginButtons'>
                    <input className="submitBtn" type="submit" value="submit"/>
                    </div>
              
            </form> 
        </div>
    );
}

export default Login;