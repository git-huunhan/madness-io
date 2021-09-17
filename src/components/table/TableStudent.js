import { useEffect, useState } from "react";
import { queryAll, deleteStudent } from "../../functions/student";

import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faSyncAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";

import { toast } from "react-toastify";
import AddStudent from "../../components/toast/AddStudent";

import { OverlayTrigger, Popover } from "react-bootstrap";

const TableStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () =>
    queryAll().then((student) => setStudents(student.data));

  const handleDelete = (studentId) => {
    deleteStudent(studentId)
      .then((res) => {
        loadStudents();
        toast.success(
          <AddStudent
            title="Deleted successfully!"
            studentCode={res.data.studentCode}
            firstName={res.data.firstName}
            lastName={res.data.lastName}
          />
        );
        document.body.click();
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
      selector: (row) => row.studentCode,
    },
    {
      name: "First Name",
      sortable: true,
      selector: (row) => row.firstName,
    },
    {
      name: "Last Name",
      sortable: true,
      selector: (row) => row.lastName,
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
      selector: (row) => moment(row.dateOfBirth).format("DD-MM-YYYY"),
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
          <Link to={`/update-student/${row.slug}`} className="actions-btn">
            <FontAwesomeIcon className="mr-3 clickable" icon={faPen} />
          </Link>

          <OverlayTrigger
            trigger="click"
            key={"bottom"}
            placement={"bottom"}
            rootClose={true}
            overlay={
              <Popover
                id={"popover-positioned-bottom"}
                className="popover-notification"
              >
                <Popover.Title as="h3">
                  <div>Do you agree to delete student?</div>
                </Popover.Title>
                <Popover.Content className="d-flex justify-content-around">
                  <Button
                    size="sm"
                    className="secondary-btn"
                    onClick={() => document.body.click()}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    className="primary-btn"
                    onClick={() => handleDelete(row._id)}
                  >
                    Agree
                  </Button>
                </Popover.Content>
              </Popover>
            }
          >
            <FontAwesomeIcon className="clickable actions-btn" icon={faTrash} />
          </OverlayTrigger>
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

          <Link to="/create-student">
            <Button className="primary-btn" size="sm">
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
      paginationComponentOptions={{
        noRowsPerPage: true,
      }}
    />
  );
};

export default TableStudent;
