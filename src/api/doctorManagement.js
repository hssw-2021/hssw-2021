import axios from "../app/axios";
import { DoctorManagementAPIpath } from "../constant/api";

export const getAllDoctors = async () => {
  const res = await axios
    .get(DoctorManagementAPIpath.getAll)
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

export const getAllFaculty = async () => {
  const res = await axios
    .get(DoctorManagementAPIpath.getAllFaculty)
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
export const getAllSpecialty = async () => {
  const res = await axios
    .get(DoctorManagementAPIpath.getAllSpecialty)
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

export const getAllSpecialtyGroupByAcademic = async () => {
  const res = await axios
    .get(DoctorManagementAPIpath.getAllGroupByAcademic)
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

export const getDoctorDetail = async (id) => {
  const res = await axios
    .get(DoctorManagementAPIpath.getDoctorDetail + "/" + id)
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

export const addNewDoctor = async (data) => {
  const res = await axios
    .post(DoctorManagementAPIpath.addNewDoctor, data)
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const editDoctor = async (data) => {
  const res = await axios
    .post(DoctorManagementAPIpath.editDoctor, data)
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const deleteDoctor = async (id) => {
  const res = await axios
    .get(DoctorManagementAPIpath.deleteDoctor + "/" + id)
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const activeDoctor = async (id) => {
  const res = await axios
    .delete(DoctorManagementAPIpath.activeDoctor, {
      params: {
        doctorId: id,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};
