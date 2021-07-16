import axios from "../app/axios";
import { medicalRecordManagementAPIpath } from "../constant/api";

export const getAllMedicalRecord = async () => {
  const res = await axios
    .get(medicalRecordManagementAPIpath.getAllMedicalRecord)
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

export const createNewMedicalRecord = async (data) => {
  const res = await axios
    .post(medicalRecordManagementAPIpath.createNewMedicalRecord, data)
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

export const searchMedicalRecords = async (params) => {
  const res = await axios
    .get(medicalRecordManagementAPIpath.search, {
      params: params,
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
