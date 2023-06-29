import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./auth.css";
import { useContext } from "react";
import { Context } from "../context/userContext/Context";
import { Link } from "react-router-dom";
function Login() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Email: yup.string().required("Email is required"),
    Password: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8081/auth/login", data)
      .then(({ data }) => {
        if (data.token) {
          dispatch({ type: "LOGIN_SUCCESS", payload: data });
          navigate("/");
        }
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };
  return (
    <div className="Login">
      <h2>Waptech Agri-connect Login</h2>
      <form className="loginDetails" onSubmit={handleSubmit(onSubmit)}>
        <legend>
          <b>User Login</b>
        </legend>
        <label>Email</label>
        <input type="email" {...register("Email")} placeholder="Email" />
        <br />
        <br />
        <p>{errors.Email?.message}</p>
        <label>Password</label>
        <input
          type="password"
          {...register("Password")}
          placeholder="password"
        />
        <br />
        <br />
        <p>{errors.Password?.message}</p>
        <div className="loginButtons">
          <input className="submitBtn" type="submit" value="submit" />
        </div>
        <label>Dont have an account? </label>
        <Link to="/register">Register instead</Link>
      </form>
    </div>
  );
}

export default Login;
