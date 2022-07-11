import axios from "../../utils/axios";

export const getUserLogin = async (email, password) =>
  await axios.post(`${process.env.REACT_APP_API}/getUserLogin`, {
    email,
    password,
  });

export const getUserData = async () =>
  await axios.get(`${process.env.REACT_APP_API}/getUserData`);

export const updateUser = async (data) =>
  await axios.patch(`${process.env.REACT_APP_API}/updateUser`, {
    data,
  });
