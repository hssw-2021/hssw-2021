import axios from "../app/axios";
import { RegisterAPIPath } from "../constant/api";

export const registerAccount = async (data) => {
    const res = await axios
        .post(
            RegisterAPIPath.register,
            data
        )
        .catch((error) => {
            console.log(error);
        });
    return res;
};