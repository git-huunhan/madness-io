import { useEffect } from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { updateStudent, queryStudentById } from "../functions/student";
import moment from "moment";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HeaderCrumb from "../components/breadcrumb/HeaderCrumb";

const UpdateStudent = ({ history, match }) => {
  const [studentCode, setStudentCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () =>
    queryStudentById(match.params.slug).then((c) => {
      setStudentCode(c.data.student.studentCode);
      setFirstName(c.data.student.firstName);
      setLastName(c.data.student.lastName);
      setEmail(c.data.student.email);
      setGender(c.data.student.gender);
      setDateOfBirth(moment(c.data.student.dateOfBirth).format("YYYY-MM-DD"));
      setAddress(c.data.student.address);
      setPhone(c.data.student.phone);
    });

  const handleSubmit = (e) => {
    updateStudent(match.params.slug, {
      studentCode,
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      address,
      phone,
    })
      .then((res) => {
        alert("Update student successfully!");
        history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 400) alert("Error, try again!");
      });
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
          <Col md="12">
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Student Code
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="1234563"
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Stephen"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Last Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Dang"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Gender
                </Form.Label>
                <Col sm="10">
                  <Form.Check
                    custom
                    inline
                    label="Male"
                    type={"radio"}
                    id={`custom-inline-${"radio"}-1`}
                    name="any"
                    checked={gender === "Male"}
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <Form.Check
                    custom
                    inline
                    label="Female"
                    type={"radio"}
                    id={`custom-inline-${"radio"}-2`}
                    name="any"
                    checked={gender === "Female"}
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Date of Birth
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Address
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Phone
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
            <Button type="submit" onClick={handleSubmit}>
              Update
            </Button>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
