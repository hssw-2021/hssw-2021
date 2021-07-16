import axios from "../app/axios";
import { DoctorAPIpath } from "../constant/api";

export const getDoctorDetail = async (id) => {
  const res = await axios
    .get(DoctorAPIpath.getDoctorDetail + "/" + id)
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

export const getAllOptionTime = async () => {
  const res = await axios
    .get(DoctorAPIpath.getAllOptionTime)
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

export const getScheduleDoctorById = async (data) => {
  const res = await axios
    .post(DoctorAPIpath.getScheduleDoctorById, data)
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

export const getListBookPending = async (query) => {
  const res = await axios
    .get(DoctorAPIpath.getListBookPendingByOptionTime, {
      params: query,
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

export const doctorAcceptBooking = async (book_time_id) => {
  const res = await axios
    .put(DoctorAPIpath.doctorAccept, { book_time_id: book_time_id })
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return res;
};

export const getListBookComfirm = async (query) => {
  const res = await axios
    .get(DoctorAPIpath.getListBookComfirmByOptionTime, {
      params: query,
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

export const addBookByDoctor = async (data) => {
  const res = await axios
    .post(DoctorAPIpath.addBookByDoctor, data)
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
