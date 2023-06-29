import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./auth.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Email: yup.string().required("Email is required"),
    Password: yup.string().required("Password is required"),
    Role: yup.string().required("Role is required"),
    RegistrationDate: yup.string().required("RegistrationDate required"),
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
      .post("http://localhost:8081/auth/register", data)
      .then((response) => {
        response.data.message && alert(response.data.message);
        navigate("/login");
      })
      .catch(({ response }) => {
        alert(response.data.error);
      });
  };
  return (
    <div className="register">
      <form className="registrationDetails" onSubmit={handleSubmit(onSubmit)}>
        <h2>Waptech User Registration</h2>
        <legend>
          <b>Personal Details</b>
        </legend>
        <div className="form_inputs">
          <div className="form-controls">
            <label>Enter the Username</label>
            <input
              type="text"
              {...register("Username")}
              placeholder="username"
            />
            <br />
            <p>{errors.Username?.message}</p>
          </div>
          <div className="form-controls">
            <label>Enter the Email</label>
            <input type="email" {...register("Email")} placeholder="email" />
            <br />
            <p>{errors.Email?.message}</p>
          </div>
          <div className="form-controls">
            <label>Enter your Password</label>
            <input
              type="password"
              {...register("Password")}
              placeholder="password"
            />
            <br />
            <p>{errors.Password?.message}</p>
          </div>
          <div className="form-controls">
            <label>Enter Your Role</label>
            <input type="text" {...register("Role")} placeholder="Role" />
            <br />
            <p>{errors.Role?.message}</p>
          </div>
          <div className="form-controls">
            <label>Registration Date</label>
            <input
              type="text"
              {...register("RegistrationDate")}
              placeholder="date"
            />
            <br />
            <p>{errors.RegistrationDate?.message}</p>
          </div>
        </div>
        <div className="registrationButtons">
          <input className="submitBtn" type="submit" value="submit" />
        </div>
        <label>Already have an account</label>
        <Link to="/login">Login instead</Link>
      </form>
    </div>
  );
}

export default Register;
