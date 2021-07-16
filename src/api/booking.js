import axios from "../app/axios";
import { BookingAPIpath } from "../constant/api";
import {
  ACCEPTED_STATUS,
  CANCEL_STATUS,
  PENDING_STATUS,
} from "../constant/ManageBooking";

export const getAllDoctors = async () => {
  const res = await axios
    .get(BookingAPIpath.getAllDoctor)
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
    .get(BookingAPIpath.getAllFaculty)
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

export const findDoctorByFacultyAndName = async (facultyId, doctor_name) => {
  const res = await axios
    .get(BookingAPIpath.findDoctorByFacultyAndName, {
      params: {
        facultyId: facultyId,
        fullname: doctor_name,
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

export const getAllOptionTime = async () => {
  const res = await axios
    .get(BookingAPIpath.getAllOptionTime)
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

export const requestBooking = async (data) => {
  const res = await axios
    .post(BookingAPIpath.requestBooking, data)
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

export const getListCancelBookByCustomerId = async (customerId) => {
  const res = await axios
    .get(BookingAPIpath.getListBookByCustomerId, {
      params: {
        customerId: customerId,
        status: CANCEL_STATUS,
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

export const getListPendingBookByCustomerId = async (customerId) => {
  const res = await axios
    .get(BookingAPIpath.getListBookByCustomerId, {
      params: {
        customerId: customerId,
        status: PENDING_STATUS,
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

export const getListAcceptedBookByCustomerId = async (customerId) => {
  const res = await axios
    .get(BookingAPIpath.getListBookByCustomerId, {
      params: {
        customerId: customerId,
        status: ACCEPTED_STATUS,
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
