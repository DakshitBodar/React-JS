import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { getstudentAsync } from "../../services/action/StudentAction";
import { PersonCircle, TelephoneFill, GeoAltFill } from "react-bootstrap-icons";

const ViewStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { student, loading } = useSelector((state) => state.Studentreducer);

  useEffect(() => {
    dispatch(getstudentAsync(id));
  }, [id, dispatch]);

  if (loading || !student) {
    return <h4 className="text-center mt-5">Loading student details...</h4>;
  }

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <Card
        style={{ width: "40rem" }}
        className="shadow-lg border-0 rounded-4 p-4"
      >
        <div className="text-center mb-3">
          <PersonCircle size={80} color="#6c63ff" />
          <h2 className="mt-2">{student.studentName}</h2>
          <Badge bg="info" className="px-3 py-2 mt-2">
            Student ID: {student.StudentId}
          </Badge>
        </div>

        <Card.Body>
          <Row className="mb-3">
            <Col md={6}>
              <strong><TelephoneFill /> Phone:</strong>
              <p>{student.phoneNumber}</p>
            </Col>
            <Col md={6}>
              <strong>Course:</strong>
              <p className="text-primary">{student.studentCourse}</p>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <strong>DOB:</strong>
              <p>{student.dob}</p>
            </Col>
            <Col md={6}>
              <strong>Gender:</strong>
              <p>{student.gender}</p>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <strong>Hobbies:</strong>
              <p>
                {Array.isArray(student.hobby)
                  ? student.hobby.join(", ")
                  : student.hobby}
              </p>
            </Col>
            <Col md={6}>
              <strong>Admission Date:</strong>
              <p>{student.admissionDate}</p>
            </Col>
          </Row>

          <div className="mb-3">
            <strong><GeoAltFill /> Address:</strong>
            <p>{student.address}</p>
          </div>

          <div className="text-center mt-4">
            <Button
              variant="secondary"
              className="me-3 px-4"
              onClick={() => navigate("/student-list")}
            >
              Back to List
            </Button>

            <Button
              variant="primary"
              className="px-4"
              onClick={() => navigate(`/edit-student/${student.StudentId}`)}
            >
              Edit Student
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewStudent;
