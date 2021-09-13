import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../../functions/student";

import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faSyncAlt,
  faPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";

const TableStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () =>
    getStudents().then((student) => setStudents(student.data));

  const handleDelete = (studentId) => {
    deleteStudent(studentId)
      .then((res) => {
        loadStudents();
        alert("Student has been deleted!");
      })
      .catch((err) => console.log(err));
  };

  const handleRefresh = () => {
    loadStudents();
  };

  const columns = [
    {
      name: "Student Code",
      sortable: true,
      selector: (row) => row.studentcode,
    },
    {
      name: "First Name",
      sortable: true,
      selector: (row) => row.firstname,
    },
    {
      name: "Last Name",
      sortable: true,
      selector: (row) => row.lastname,
    },
    {
      name: "Email",
      grow: 2,
      selector: (row) => row.email,
    },
    {
      name: "Gender",
      sortable: true,
      selector: (row) => row.gender,
    },
    {
      name: "Date Of Birth",
      sortable: true,
      selector: (row) => moment(row.dateofbirth).format("DD-MM-YYYY"),
    },
    {
      name: "Address",
      selector: (row) => row.address,
      grow: 2,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <Link to={`/student-update/${row.slug}`}>
            <FontAwesomeIcon className="mr-2 clickable" icon={faPen} />
          </Link>
          <FontAwesomeIcon
            className="clickable"
            icon={faTrash}
            onClick={() => handleDelete(row._id)}
          />
        </div>
      ),
    },
  ];
  return (
    <DataTable
      title={
        <div className="table-title-container">
          <div>
            <span className="table-title mr-2">Student Data Table</span>

            <FontAwesomeIcon
              className="mr-2 clickable table-btn-refresh"
              icon={faSyncAlt}
              onClick={handleRefresh}
            />
          </div>

          <Link to="/student-create">
            <Button className="table-btn-add" size="sm">
              <span className="mr-2">Add</span>
              <FontAwesomeIcon className="clickable" icon={faPlus} />
            </Button>
          </Link>
        </div>
      }
      columns={columns}
      data={students}
      highlightOnHover
      pagination
    />
  );
};

export default TableStudent;
