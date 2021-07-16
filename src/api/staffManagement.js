import axios from "../app/axios";
import { StaffManagementAPIpath } from "../constant/api";
// import { getToken } from "../app/token";

// export const getStaffByPaging = async (params) => {
//   const token = getToken();
//   const requestParams = {
//     page: 1,
//     limit: 5,
//     sort: "asc",
//     order: "code",
//   };
//   const res = await axios
//     .get(StaffManagementAPIpath.getPageStaff, {
//       headers: {
//         Authorization: token,
//       },
//       params: requestParams,
//     })
//     .then((res) => {
//       if (res.status === 200) {
//         return res.data;
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   return res;
// };

export const getAllStaff = async () => {
  const res = await axios
    .get(StaffManagementAPIpath.getAllStaff)
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

export const getStaffDetail = async (id) => {
  const res = await axios
    .get(StaffManagementAPIpath.getStaffDetail + "/" + id)
    .catch((error) => {
      console.log(error);
    });
  if (res.status === 200) return res.data;
};

export const addNewStaff = async (data) => {
  const res = await axios
    .post(StaffManagementAPIpath.addNewStaff, data)
    .catch((error) => {
      console.log(error);
    });
  if (res.status === 200) return res.data;
};

export const editStaff = async (data) => {
  const res = await axios
    .put(StaffManagementAPIpath.editStaff, data)
    .catch((error) => {
      console.log(error);
    });
  if (res.status === 200) return res.data;
};

export const activeStaff = async (staffId) => {
  const res = await axios
    .delete(StaffManagementAPIpath.activeStaff, {
      params: {
        staffId: staffId,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  if (res.status === 200) return res.data;
};
