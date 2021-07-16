import axios from "axios";
import { setToken, setRefreshToken } from "../app/token";
import { authAPIpath } from "../constant/api";

export const authenticate = async (values) => {
  const user = {
    username: values.username,
    password: values.password,
  };
  try {
    const res = await axios.post(authAPIpath.authen, user);

    if (res.status === 200) {
      setToken(res.data.data.token);
      setRefreshToken(res.data.data.refresh_token);
      return res.data.data.token;
    }
  } catch (error) {
    console.log(error);
  }
  // const res = await axios
  //   .post(authAPIpath.authen, user)
  //   .then((res) => {
  //     if (res.status === 200) {
  //       setToken(res.data.data.token);
  //       setRefreshToken(res.data.data.refresh_token);
  //       return res.data.data.token;
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // return res;
};

export const refreshToken = async (refresh_token) => {
  const res = await axios
    .post(authAPIpath.refresh, refresh_token)
    .then((res) => {
      if (res.status === 200) {
        setToken(res.data.data.token);
        setRefreshToken(res.data.data.refresh_token);
        return res.data.data.token;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};
