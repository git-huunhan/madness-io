import axios from "axios";

export const getStudents = async () =>
  await axios.get(`${process.env.REACT_APP_API}/list`);

export const getStudent = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/student/${slug}`)

export const createStudent = async (student) =>
  await axios.post(`${process.env.REACT_APP_API}/create`, { student });

export const deleteStudent = async (studentId) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete/${studentId}`);

export const updateStudent = async (slug, student) =>
  await axios.put(`${process.env.REACT_APP_API}/student/${slug}`, student);