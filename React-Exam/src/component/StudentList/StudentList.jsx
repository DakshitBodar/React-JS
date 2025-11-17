import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteStudentAsync, getAllstudentAsync } from "../../services/action/StudentAction";
import { Button, Card, Row, Col, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import './StudentList.css'; 

const StudentList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { students, loading } = useSelector(state => state.Studentreducer);
    const { user } = useSelector(state => state.authreducer);

    const [search, setSearch] = useState("");
    const [courseFilter, setCourseFilter] = useState("");

    useEffect(() => {
        dispatch(getAllstudentAsync());
    }, [dispatch]);

    const handleEdit = id => navigate(`/edit-student/${id}`);
    const handleDelete = id => dispatch(DeleteStudentAsync(id));
    const handleView = id => navigate(`/view-student/${id}`);

    const filteredStudents = students.filter((stu) => {
        return (
            stu.studentName.toLowerCase().includes(search.toLowerCase()) &&
            (courseFilter ? stu.studentCourse === courseFilter : true)
        );
    });

    const courseList = [...new Set(students.map(s => s.studentCourse))];

    return (
        <>
            <h2 className="text-center mb-5 heading">Student List</h2>

            <Row className="mb-4 filter-row">
                <Col md={4} className="filter-col">
                    <Form.Control
                        type="text"
                        placeholder="Search by student name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-input"
                    />
                </Col>

                <Col md={4} className="filter-col">
                    <Form.Select
                        value={courseFilter}
                        onChange={(e) => setCourseFilter(e.target.value)}
                        className="course-select"
                    >
                        <option value="">Filter by Course</option>
                        {courseList.map((course, i) => (
                            <option key={i} value={course}>{course}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {loading ? (
                    <Col className="text-center">
                        <Spinner animation="border" variant="primary" size="lg" />
                    </Col>
                ) : filteredStudents.length === 0 ? (
                    <Col className="text-center">
                        <p className="no-students-text">No Students Found</p>
                    </Col>
                ) : (
                    filteredStudents.map((stu) => (
                        <Col md={4} key={stu.StudentId} className="mb-4">
                            <Card className="student-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-4">
                                        <div 
                                            className="avatar"
                                        >
                                            {stu.studentName.charAt(0).toUpperCase()}
                                        </div>

                                        <div>
                                            <Card.Title className="student-name">
                                                {stu.studentName}
                                            </Card.Title>
                                            <small className="text-muted">{stu.studentCourse}</small>
                                        </div>
                                    </div>

                                    <Card.Text className="student-details">
                                        <strong>Phone:</strong> {stu.phoneNumber} <br />
                                        <strong>Gender:</strong> {stu.gender} <br />
                                        <strong>Hobby:</strong> {stu.hobby.join(", ")} <br />
                                        <strong>Address:</strong> {stu.address} <br />
                                        <strong>DOB:</strong> {stu.dob} <br />
                                        <strong>Admission:</strong> {stu.admissionDate}
                                    </Card.Text>

                                    {user && (
                                        <div className="action-buttons">
                                            <Button 
                                                variant="primary" 
                                                size="sm"
                                                onClick={() => handleEdit(stu.StudentId)}
                                                className="action-btn"
                                            >
                                                <FaEdit className="me-2" /> Edit
                                            </Button>

                                            <Button 
                                                variant="info" 
                                                size="sm"
                                                onClick={() => handleView(stu.StudentId)}
                                                className="action-btn"
                                            >
                                                <FaEye className="me-2" /> View
                                            </Button>

                                            <Button 
                                                variant="danger" 
                                                size="sm"
                                                onClick={() => handleDelete(stu.StudentId)}
                                                className="action-btn"
                                            >
                                                <FaTrash className="me-2" /> Delete
                                            </Button>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </>
    );
};

export default StudentList;
