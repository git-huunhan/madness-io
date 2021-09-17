import { useEffect } from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { updateStudent, queryStudentById } from "../functions/student";
import moment from "moment";
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

const UpdateStudent = ({ history, match }) => {
  const [values, setValues] = useState(initialState);
  const [dateOfBirth, setDateOfBirth] = useState("");

  const { studentCode, firstName, lastName, email, gender, address, phone } =
    values;

  const { slug } = match.params;

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    queryStudentById(slug).then((item) => {
      setValues({
        ...values,
        ...item.data.student,
      });

      setDateOfBirth(
        moment(item.data.student.dateOfBirth).format("YYYY-MM-DD")
      );
    });
  };

  const handleSubmit = (e) => {
    updateStudent(slug, values, dateOfBirth)
      .then((res) => {
        toast.success(
          <AddStudent
            title="Updated successfully!"
            studentCode={res.data.studentCode}
            firstName={res.data.firstName}
            lastName={res.data.lastName}
          />
        );
        history.push("/");
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
            <span>Update Student</span>
          </div>

          <HeaderCrumb
            icon={faHome}
            mainTitle="Table"
            secondaryTitle="Update Student"
          />
        </div>

        <div className="page-content">
          <div className="form-container">
            <div className="form-header">Update Student Form</div>

            <div className="form-content">
              <Col md="8">
                <Form>
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
                        checked={gender === "Male"}
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
                        checked={gender === "Female"}
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
                        Update
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

export default UpdateStudent;
