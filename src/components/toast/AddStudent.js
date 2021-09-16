const AddStudent = ({ title, studentCode, firstName, lastName }) => {
  return (
    <div>
      <strong>{title}</strong>
      <div>
        <strong>Student Code:</strong> {studentCode}
      </div>
      <div>
        <strong>Name:</strong> {firstName} {lastName}
      </div>
    </div>
  );
};

export default AddStudent;
