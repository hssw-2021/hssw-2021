import axios from "../app/axios";
import { ServiceManagementAPIpath } from "../constant/api";
// import { getToken } from "../app/token";

export const getAllServices = async () => {
  // const token = getToken();
  const res = await axios
    .get(
      ServiceManagementAPIpath.getAll
      //   {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    )
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

export const getServiceDetail = async (id) => {
  // const token = getToken();
  const res = await axios
    .get(
      ServiceManagementAPIpath.getServiceDetail + "/" + id
      // {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    )
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

export const addNewService = async (data) => {
  // const token = getToken();
  const res = await axios
    .post(
      ServiceManagementAPIpath.addNewService,
      data
      //   , {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    )
    // .then(async (res) => {
    //   if (res.status === 200) {
    //     const response = await getAllServices();
    //     return response.data;
    //   }
    // })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const editService = async (data) => {
  // const token = getToken();
  const res = await axios
    .post(
      ServiceManagementAPIpath.editService,
      data
      //   {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    )
    .catch((error) => {
      console.log(error);
    });
  return res;
};
export const deleteService = async (data) => {
  // const token = getToken();
  const res = await axios
    .post(
      ServiceManagementAPIpath.deleteService,
      data
      //   {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    )
    .catch((error) => {
      console.log(error);
    });
  return res;
};
