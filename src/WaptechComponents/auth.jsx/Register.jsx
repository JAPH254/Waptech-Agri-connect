import {useNavigate} from "react-router-dom";
import Axios from "axios";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './auth.css'
import axios from "axios";
function Register() {
    const schema=yup.object().shape({
        Username:yup.string().required("Username is required"),
        Email:yup.string().required("Email is required"),
        Password:yup.string().required("Password is required"),
        Role:yup.string().required("Role is required"),
        RegistrationDate:yup.string().required("RegistrationDate required")
    });
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });
    const onSubmit=(myData)=>{
        axios.post("http://localhost:8081/auth/register",myData)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    return (
        <div className='register'>
        <form className='registrationDetails' onSubmit={handleSubmit(onSubmit)}>
            <h2>Waptech User Registration</h2>
                <legend><b>Personal Details</b></legend>
                <div>
                <label>Enter the Username</label>
                <input type="text" {...register("Username")}placeholder='username' /><br />
                <p>{errors.Username?.message}</p>
                <label>Enter the Email</label>
                <input type="email" {...register("Email")}placeholder='email' /><br />
                <p>{errors.Email?.message}</p>
                <label>Enter your Password</label>
                <input type="password" {...register("Password")} placeholder='password' /><br />
                <p>{errors.Password?.message}</p>
                <label>Enter Your Role</label>
                <input type="text" {...register("Role")} placeholder='Role' /><br />
                <p>{errors.Role?.message}</p>
                <label>Registration Date</label>
                <input type="text" {...register("RegistrationDate")} placeholder='date'/><br />
                <p>{errors.RegistrationDate?.message}</p>
                </div>
                <div className='registrationButtons'>
                <input className="submitBtn" type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
}

export default Register;