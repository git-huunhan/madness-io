import axios from "../utils/axios";

export const getAdminLogin = async (email, password) =>
  await axios.post(`${process.env.REACT_APP_API}/getAdminLogin`, {
    email,
    password,
  });

export const getAdminData = async () =>
  await axios.get(`${process.env.REACT_APP_API}/getAdminData`);
