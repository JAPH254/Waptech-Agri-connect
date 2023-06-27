import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useContext } from "react";
import { Context } from "../context/userContext/Context";

export default function CreatePost() {
    const { user } = useContext(Context)
    const schema = yup.object().shape({
        Content: yup.string().required("Input some content"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
    };
    return (
        <div className="Createposts">
            <form onSubmit={handleSubmit(onSubmit)} className="Form" >
                <textarea
                    {...register("Content")}
                    name="Content"
                    id="Content"
                ></textarea>
                <p>{errors.description?.message}</p>
                <input className="submitBtn" type="submit" value="Post" />
            </form>
        </div>
    )
}