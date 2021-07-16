import axios from "../app/axios";
import { CustomerAPIpath, loginAPIpath } from "../constant/api";

export const getRole = async (values) => {
  const { username } = values;
  const res = await axios
    .get(loginAPIpath.getRole + `/` + username)
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

export const getCustomerProfile = async (id) => {
  const res = await axios
    .get(CustomerAPIpath.getCustomerProfile + `/` + id)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    });
  return res;
};
