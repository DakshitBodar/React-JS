import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getstudentAsync, updatestudentAsync } from "../../services/action/StudentAction";

const StudentEdit = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { student } = useSelector(state => state.Studentreducer);

  const [inputForm, setInputForm] = useState({
    StudentId: "",
    studentName: "",
    phoneNumber: "",
    studentCourse: "",
    dob: "",
    gender: "",
    hobby: [],
    address: "",
    admissionDate: ""
  });

  useEffect(() => {
    dispatch(getstudentAsync(id));
  }, [id]);

  useEffect(() => {
    if (student) {
      setInputForm(student);
    }
  }, [student]);


  const handleChanged = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setInputForm((prev) => ({
        ...prev,
        hobby: checked
          ? [...prev.hobby, value]
          : prev.hobby.filter((v) => v !== value),
      }));
    } else {
      setInputForm({
        ...inputForm,
        [name]: value,
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatestudentAsync(inputForm));
    navigate("/student-list");
  };

  return (
    <div className="premium-bg">

      {/* Gradient Header */}
      <div className="premium-header">
        <h2 align="center"> Edit Student Details</h2>
      </div>

      <Container className="mt-4 mb-5">
        <Card className="premium-card shadow-lg p-4">

          <Form onSubmit={handleSubmit}>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Student Name</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="studentName"
                  value={inputForm.studentName}
                  onChange={handleChanged}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Phone Number</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={inputForm.phoneNumber}
                  onChange={handleChanged}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Student Course</Form.Label>
              <Col sm="9">
                <Form.Select
                  name="studentCourse"
                  value={inputForm.studentCourse}
                  onChange={handleChanged}
                >
                  <option value="">Select Course</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="BSC-IT">BSC-IT</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="Computer Science">Computer Science</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">DOB</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="date"
                  name="dob"
                  value={inputForm.dob}
                  onChange={handleChanged}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Gender</Form.Label>
              <Col sm="9">
                <Form.Check inline label="Men" type="radio" name="gender"
                  value="men" checked={inputForm.gender === "men"} onChange={handleChanged} />
                <Form.Check inline label="Women" type="radio" name="gender"
                  value="women" checked={inputForm.gender === "women"} onChange={handleChanged} />
                <Form.Check inline label="Other" type="radio" name="gender"
                  value="other" checked={inputForm.gender === "other"} onChange={handleChanged} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Hobby</Form.Label>
              <Col sm="9">
                <Form.Check inline label="Reading" type="checkbox" name="hobby"
                  value="reading" checked={inputForm.hobby.includes("reading")} onChange={handleChanged} />
                <Form.Check inline label="Sports" type="checkbox" name="hobby"
                  value="sports" checked={inputForm.hobby.includes("sports")} onChange={handleChanged} />
                <Form.Check inline label="Music" type="checkbox" name="hobby"
                  value="music" checked={inputForm.hobby.includes("music")} onChange={handleChanged} />
                <Form.Check inline label="Travelling" type="checkbox" name="hobby"
                  value="travelling" checked={inputForm.hobby.includes("travelling")} onChange={handleChanged} />
                <Form.Check inline label="Gaming" type="checkbox" name="hobby"
                  value="gaming" checked={inputForm.hobby.includes("gaming")} onChange={handleChanged} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Address</Form.Label>
              <Col sm="9">
                <Form.Control
                  as="textarea"
                  name="address"
                  value={inputForm.address}
                  onChange={handleChanged}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Admission Date</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="date"
                  name="admissionDate"
                  value={inputForm.admissionDate}
                  onChange={handleChanged}
                />
              </Col>
            </Form.Group>

            <div className="text-center mt-4">
              <Button className="premium-btn px-5" type="submit">
                Update Student
              </Button>
            </div>

          </Form>

        </Card>
      </Container>
    </div>
  );
};

export default StudentEdit;
