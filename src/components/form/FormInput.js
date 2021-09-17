import { Form, Row, Col } from "react-bootstrap";

const FormInput = ({ title, type, name, placeholder, value, handle }) => {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm="2" className="d-flex justify-content-end">
        {title}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          required
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handle}
        />
      </Col>
    </Form.Group>
  );
};

export default FormInput;
