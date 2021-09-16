import axios from "axios";

export const createStudent = async (student) =>
  await axios.post(`${process.env.REACT_APP_API}/create`, { student });

export const queryAll = async () =>
  await axios.get(`${process.env.REACT_APP_API}/queryAll`);

export const queryStudentById = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/getById/${slug}`);

export const updateStudent = async (slug, student) =>
  await axios.put(`${process.env.REACT_APP_API}/update/${slug}`, student);

export const deleteStudent = async (studentId) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete/${studentId}`);
