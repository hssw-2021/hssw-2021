import axios from "axios";
import { CustomerManagementAPIpath } from "../constant/api";
import { getToken } from "../app/token";

export const getCustomerByPaging = async (params) => {
  const token = getToken();
  const requestParams = {
    page: 1,
    limit: 5,
    sort: "asc",
    order: "code",
  };
  const res = await axios
    .get(CustomerManagementAPIpath.getPageCustomers, {
      headers: {
        Authorization: token,
      },
      params: requestParams,
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const getAllCustomers = async () => {
  const token = getToken();
  const res = await axios
    .get(CustomerManagementAPIpath.getAll, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const getCustomerDetail = async (id) => {
  const token = getToken();
  const res = await axios
    .get(CustomerManagementAPIpath.getCustomerDetail + "/" + id, {
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  if (res.status === 200) return res.data;
};

export const addNewCustomer = async (data) => {
  const token = getToken();
  const res = await axios
    .post(CustomerManagementAPIpath.addNewCustomer, data, {
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  if (res.status === 200) return res.data;
};

export const editCustomer = async (data) => {
  const token = getToken();
  const res = await axios
    .post(CustomerManagementAPIpath.editCustomer, data, {
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  if (res.status === 200) return res.data;
};
