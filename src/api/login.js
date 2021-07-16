import axios from "axios";
import { setToken, getToken } from "../app/token";
import { loginAPIpath } from "../constant/api";



export const login = async (values) => {
  const user = {
    username: values.username,
    password: values.password,
  };
  const res = await axios
    .post(loginAPIpath.login, user)
    .then((res) => {
      if (res.status === 200) {
        setToken(res.data.data.token);
        return res.data.data.token;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const getRole = async (values) => {
  const { username } = values;
  const token = getToken();
  const res = await axios
    .get(loginAPIpath.getRole + `/` + username, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        const { id, role } = res.data.data;
        return { id, role };
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

