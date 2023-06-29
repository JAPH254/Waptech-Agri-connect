import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useContext } from "react";
import { Context } from "../context/userContext/Context";
import { ApiDomain } from "../../utils/Utils";

export default function CreatePost() {
  const { user } = useContext(Context);
  const schema = yup.object().shape({
    Content: yup.string().required("Input some content"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    Axios.post(`${ApiDomain}/posts`, data, {
      headers: {
        Authorization: `${user.token}`,
      },
    })
      .then((response) => {
        reset();
        response.data.message && alert(response.data.message);
      })
      .catch((response) => {
        alert(response.data, error);
      });
  };
  return (
    <div className="Createposts">
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <textarea
          {...register("Content")}
          name="Content"
          id="Content"
          placeholder="Your Thoughts Here"
        ></textarea>
        <p>{errors.description?.message}</p>
        <input className="submitBtn" type="submit" value="Post" />
      </form>
    </div>
  );
}
