import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteStudentAsync, getAllstudentAsync } from "../../services/action/StudentAction";
import { Button, Card, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const StudentList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { students } = useSelector(state => state.Studentreducer);
    const { user } = useSelector(state => state.authreducer);

    
    const [search, setSearch] = useState("");
    const [courseFilter, setCourseFilter] = useState("");

    useEffect(() => {
        dispatch(getAllstudentAsync());
    }, []);

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
            <h2 className="text-center mb-4">Student List</h2>

            <Row className="mb-4">
                <Col md={4}>
                    <Form.Control
                        type="text"
                        placeholder="Search by student name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>

                <Col md={4}>
                    <Form.Select
                        value={courseFilter}
                        onChange={(e) => setCourseFilter(e.target.value)}
                    >
                        <option value="">Filter by Course</option>
                        {courseList.map((course, i) => (
                            <option key={i} value={course}>{course}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {filteredStudents.length === 0 ? (
                    <p>No Students Found</p>
                ) : (
                    filteredStudents.map((stu) => (
                        <Col md={4} key={stu.StudentId} className="mb-4">
                            
                            <Card 
                                className="shadow-sm border-0"
                                style={{ borderRadius: "15px" }}
                            >
                                <Card.Body>

                                    <div className="d-flex align-items-center mb-3">
                                        <div 
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                                borderRadius: "50%",
                                                background: "#007bff20",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                color: "#007bff",
                                                marginRight: "12px"
                                            }}
                                        >
                                            {stu.studentName.charAt(0).toUpperCase()}
                                        </div>

                                        <div>
                                            <Card.Title className="fw-bold mb-0" style={{ fontSize: "18px" }}>
                                                {stu.studentName}
                                            </Card.Title>
                                            <small className="text-muted">{stu.studentCourse}</small>
                                        </div>
                                    </div>

                                    <Card.Text style={{ lineHeight: "1.6" }}>
                                        <strong>Phone:</strong> {stu.phoneNumber} <br />
                                        <strong>Gender:</strong> {stu.gender} <br />
                                        <strong>Hobby:</strong> {stu.hobby.join(", ")} <br />
                                        <strong>Address:</strong> {stu.address} <br />
                                        <strong>DOB:</strong> {stu.dob} <br />
                                        <strong>Admission:</strong> {stu.admissionDate}
                                    </Card.Text>

                                    {user && (
                                        <div className="d-flex justify-content-between mt-3">
                                            <Button 
                                                variant="primary" 
                                                size="sm"
                                                style={{ width: "30%" }}
                                                onClick={() => handleEdit(stu.StudentId)}
                                            >
                                                Edit
                                            </Button>

                                            <Button 
                                                variant="info" 
                                                size="sm"
                                                style={{ width: "30%" }}
                                                onClick={() => handleView(stu.StudentId)}
                                            >
                                                Student Details
                                            </Button>

                                            <Button 
                                                variant="danger" 
                                                size="sm"
                                                style={{ width: "30%" }}
                                                onClick={() => handleDelete(stu.StudentId)}
                                            >
                                                Delete
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

