import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { Button, Col, Container, Form, Row, Card, Alert } from "react-bootstrap";
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
    const [errors, setErrors] = useState({}); 

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

    const validateForm = () => {
        const newErrors = {};

        if (!inputForm.studentName) {
            newErrors.studentName = "Student name is required.";
        }

        if (!inputForm.phoneNumber || inputForm.phoneNumber.length !== 10) {
            newErrors.phoneNumber = "Phone number must be 10 digits.";
        }

        if (!inputForm.studentCourse) {
            newErrors.studentCourse = "Course selection is required.";
        }

        if (!inputForm.dob) {
            newErrors.dob = "Date of birth is required.";
        }

        if (!inputForm.gender) {
            newErrors.gender = "Gender selection is required.";
        }

        if (!inputForm.admissionDate) {
            newErrors.admissionDate = "Admission date is required.";
        }

        if (!inputForm.address) {
            newErrors.address = "Address is required.";
        }

        return Object.keys(newErrors).length === 0 ? null : newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        inputForm.StudentId = generateUniqueId({
            length: 4,
            useLetters: false,
        });

        dispatch(addnewStudentAsync(inputForm));
        navigate("/student-list");
    };

    return (
        <Container className="mt-4 mb-5">
            <Card className="shadow-lg p-5" style={{ borderRadius: "25px", backgroundColor: "#f9f9f9" }}>
                <h2 className="text-center mb-4 text-primary font-weight-bold">
                    Student Registration Form
                </h2>

                {/* Error Alert */}
                {Object.keys(errors).length > 0 && (
                    <Alert variant="danger">
                        Please correct the following errors:
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">
                            Student Name
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="text"
                                placeholder="Enter student name"
                                name="studentName"
                                value={inputForm.studentName}
                                onChange={handleChanged}
                                className="py-3"
                                isInvalid={!!errors.studentName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.studentName}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">
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
                                className="py-3"
                                isInvalid={!!errors.phoneNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phoneNumber}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">
                            Student Course
                        </Form.Label>
                        <Col sm="9">
                            <Form.Select
                                name="studentCourse"
                                value={inputForm.studentCourse}
                                onChange={handleChanged}
                                className="py-3"
                                isInvalid={!!errors.studentCourse}
                            >
                                <option value="">Select Course</option>
                                <option value="BCA">BCA</option>
                                <option value="BBA">BBA</option>
                                <option value="BSC-IT">BSC-IT</option>
                                <option value="MBA">MBA</option>
                                <option value="MCA">MCA</option>
                                <option value="Computer Science">Computer Science</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.studentCourse}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">
                            Date of Birth
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="date"
                                name="dob"
                                value={inputForm.dob}
                                onChange={handleChanged}
                                className="py-3"
                                isInvalid={!!errors.dob}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.dob}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">Gender</Form.Label>
                        <Col sm="9">
                            <Form.Check
                                inline
                                label="Men"
                                name="gender"
                                type="radio"
                                value="men"
                                checked={inputForm.gender === "men"}
                                onChange={handleChanged}
                                isInvalid={!!errors.gender}
                            />
                            <Form.Check
                                inline
                                label="Women"
                                name="gender"
                                type="radio"
                                value="women"
                                checked={inputForm.gender === "women"}
                                onChange={handleChanged}
                                isInvalid={!!errors.gender}
                            />
                            <Form.Check
                                inline
                                label="Other"
                                name="gender"
                                type="radio"
                                value="other"
                                checked={inputForm.gender === "other"}
                                onChange={handleChanged}
                                isInvalid={!!errors.gender}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.gender}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">
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

                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">
                            Address
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your Address"
                                name="address"
                                value={inputForm.address}
                                onChange={handleChanged}
                                className="py-3"
                                isInvalid={!!errors.address}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.address}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm="3" className="font-weight-bold">
                            Admission Date
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control
                                type="date"
                                name="admissionDate"
                                value={inputForm.admissionDate}
                                onChange={handleChanged}
                                className="py-3"
                                isInvalid={!!errors.admissionDate}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.admissionDate}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button
                            variant="primary"
                            type="submit"
                            className="px-5 py-2"
                            style={{ fontSize: "16px", borderRadius: "25px" }}
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default StudentForm;
