import { useState } from "react";
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
    createStudent(values)
      .then((res) =>
        toast.success(
          <AddStudent
            title="Added successfully!"
            studentCode={res.data.studentCode}
            firstName={res.data.firstName}
            lastName={res.data.lastName}
          />
        )
      )
      .catch((err) => {
        console.log(err);
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
          <Col md="12">
            <Form>
              <FormInput
                title="Student Code"
                type="text"
                name="studentCode"
                placeholder="1234563"
                value={studentCode}
                handle={handleChange}
              />
              <FormInput
                title="First Name"
                type="text"
                name="firstName"
                placeholder="Stephen"
                value={firstName}
                handle={handleChange}
              />

              <FormInput
                title="Last Name"
                type="text"
                name="lastName"
                placeholder="Dang"
                value={lastName}
                handle={handleChange}
              />

              <FormInput
                title="Email"
                type="email"
                name="email"
                value={email}
                placeholder="stephen.dang@gmail.com"
                handle={handleChange}
              />

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Gender
                </Form.Label>
                <Col sm="10">
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
                placeholder="Address"
                value={address}
                handle={handleChange}
              />

              <FormInput
                title="Phone"
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                handle={handleChange}
              />

              <Button onClick={handleSubmit}>Create</Button>
            </Form>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default StudentCreate;
