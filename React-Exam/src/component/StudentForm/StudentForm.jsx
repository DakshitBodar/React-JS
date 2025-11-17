import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addnewStudentAsync } from "../../services/action/StudentAction";

const StudentForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialState = {
        StudentId: "",
        studentName: "",
        phoneNumber: "",
        studentCourse: "",
        dob: "",
        gender: "",
        hobby: [],
        address: "",
        admissionDate: ""
    };

    const [inputForm, setInputForm] = useState(initialState);

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
        inputForm.StudentId = generateUniqueId({
            length: 4,
            useLetters: false,
        });
        dispatch(addnewStudentAsync(inputForm));
        navigate("/student-list");
    };

    return (
        <Container className="mt-4 mb-5">
            <Card className="shadow-lg p-4" style={{ borderRadius: "15px" }}>
                <h2 className="text-center mb-4 text-primary">
                    Student Registration Form
                </h2>

                <Form onSubmit={handleSubmit}>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Student Name
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="text"
                                placeholder="Enter student name"
                                name="studentName"
                                value={inputForm.studentName}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Phone Number
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="number"
                                placeholder="Enter phone number"
                                name="phoneNumber"
                                value={inputForm.phoneNumber}
                                onChange={handleChanged}
                                onInput={(e) => {
                                    if (e.target.value.length > 10) {
                                        e.target.value = e.target.value.slice(0, 10);
                                    }
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Student Course
                        </Form.Label>
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
                        <Form.Label column sm="3">
                            Date of Birth
                        </Form.Label>
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
                            <Form.Check
                                inline
                                label="Men"
                                name="gender"
                                type="radio"
                                value="men"
                                checked={inputForm.gender === "men"}
                                onChange={handleChanged}
                            />
                            <Form.Check
                                inline
                                label="Women"
                                name="gender"
                                type="radio"
                                value="women"
                                checked={inputForm.gender === "women"}
                                onChange={handleChanged}
                            />
                            <Form.Check
                                inline
                                label="Other"
                                name="gender"
                                type="radio"
                                value="other"
                                checked={inputForm.gender === "other"}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Student Hobby
                        </Form.Label>
                        <Col sm="9">
                            <Form.Check
                                inline
                                label="Reading"
                                name="hobby"
                                type="checkbox"
                                value="reading"
                                checked={inputForm.hobby.includes("reading")}
                                onChange={handleChanged}
                            />
                            <Form.Check
                                inline
                                label="Sports"
                                name="hobby"
                                type="checkbox"
                                value="sports"
                                checked={inputForm.hobby.includes("sports")}
                                onChange={handleChanged}
                            />
                            <Form.Check
                                inline
                                label="Music"
                                name="hobby"
                                type="checkbox"
                                value="music"
                                checked={inputForm.hobby.includes("music")}
                                onChange={handleChanged}
                            />
                            <Form.Check
                                inline
                                label="Travelling"
                                name="hobby"
                                type="checkbox"
                                value="travelling"
                                checked={inputForm.hobby.includes("travelling")}
                                onChange={handleChanged}
                            />
                            <Form.Check
                                inline
                                label="Gaming"
                                name="hobby"
                                type="checkbox"
                                value="gaming"
                                checked={inputForm.hobby.includes("gaming")}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Address
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your Address"
                                name="address"
                                value={inputForm.address}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                            Admission Date
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="date"
                                name="admissionDate"
                                value={inputForm.admissionDate}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary" type="submit" className="px-5">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default StudentForm;
