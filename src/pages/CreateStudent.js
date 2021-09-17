import { useState } from "react";
import { useDispatch } from "react-redux";
import { createStudent } from "../functions/student";

import { Button, Col, Row, Form } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HeaderCrumb from "../components/breadcrumb/HeaderCrumb";
import FormInput from "../components/form/FormInput";

import { toast } from "react-toastify";
import AddStudent from "../components/toast/AddStudent";

const initialState = {
  studentCode: "",
  firstName: "",
  lastName: "",
  email: "",
  gender: ["Male", "Female"],
  dateOfBirth: "",
  address: "",
  phone: "",
};

const StudentCreate = () => {
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();

  const {
    studentCode,
    firstName,
    lastName,
    email,
    dateOfBirth,
    address,
    phone,
  } = values;

  const handleSubmit = (e) => {
    let student = [];
    let createdAt = Date.now();

    createStudent(values)
      .then((res) => {
        if (typeof window !== "undefined") {
          if (localStorage.getItem("student")) {
            student = JSON.parse(localStorage.getItem("student"));
          }

          student.push({
            ...values,
            createdAt,
          });

          localStorage.setItem("student", JSON.stringify(student));
          dispatch({
            type: "ADD_TO_NOTIFICATION",
            payload: student,
          });
        }
        toast.success(
          <AddStudent
            title="Added successfully!"
            studentCode={res.data.studentCode}
            firstName={res.data.firstName}
            lastName={res.data.lastName}
          />
        );
      })
      .catch((err) => {
        if (err.response.data.err.includes("required")) {
          toast.error("Please fill out form completely!");
        } else if (err.response.data.err.includes("E11000")) {
          toast.error("Student Code already exits!");
        }
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (e) => {
    setValues({ ...values, gender: e.target.value });
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-header">
          <div className="page-header-title">
            <span>Create Student</span>
          </div>

          <HeaderCrumb
            icon={faHome}
            mainTitle="Table"
            secondaryTitle="Create Student"
          />
        </div>

        <div className="page-content">
          <div className="form-container">
            <div className="form-header">Create Student Form</div>

            <div className="form-content">
              <Col md="8">
                <Form onSubmit={handleSubmit}>
                  <FormInput
                    title="Student Code"
                    type="text"
                    name="studentCode"
                    placeholder="Enter Student Code"
                    value={studentCode}
                    handle={handleChange}
                  />
                  <FormInput
                    title="First Name"
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    handle={handleChange}
                  />

                  <FormInput
                    title="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    handle={handleChange}
                  />

                  <FormInput
                    title="Email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter Email"
                    handle={handleChange}
                  />

                  <Form.Group as={Row}>
                    <Form.Label
                      column
                      sm="2"
                      className="d-flex justify-content-end"
                    >
                      Gender
                    </Form.Label>
                    <Col sm="10" className="d-flex align-items-center">
                      <Form.Check
                        custom
                        inline
                        label="Male"
                        type="radio"
                        id={`custom-inline-${"radio"}-1`}
                        name="any"
                        value="Male"
                        onChange={handleGenderChange}
                      />
                      <Form.Check
                        custom
                        inline
                        label="Female"
                        type="radio"
                        id={`custom-inline-${"radio"}-2`}
                        name="any"
                        value="Female"
                        onChange={handleGenderChange}
                      />
                    </Col>
                  </Form.Group>

                  <FormInput
                    title="Date Of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    handle={handleChange}
                  />

                  <FormInput
                    title="Address"
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    value={address}
                    handle={handleChange}
                  />

                  <FormInput
                    title="Phone"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    handle={handleChange}
                  />

                  <Form.Group as={Row}>
                    <Form.Label
                      column
                      sm="2"
                      className="d-flex justify-content-end"
                    ></Form.Label>
                    <Col sm="10">
                      <Button
                        size="sm"
                        className="primary-btn"
                        onClick={handleSubmit}
                      >
                        Create
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCreate;
