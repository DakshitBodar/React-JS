import generateUniqueId from 'generate-unique-id';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router'
import { getStorageData, setStorageData } from '../Services/Storage';

const Editmovie = () => {

    const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    quantity: "",
    category: "",
    image: ""
}

    let [inputForm, setInputForm] = useState(initialState);
    const navigate = useNavigate();
    let { id } = useParams();


    useEffect(() => {
        let data = getStorageData();
        let record = data.find((pro) => pro.id == id);
        setInputForm(record);
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault();

        let data = getStorageData();

        let updateData = data.map((v, i) => {
            if (v.id == inputForm.id) {
                return inputForm;
            }
            else {
                return v;
            }
        })
        setStorageData(updateData);
        setInputForm(initialState)
        navigate("/")
        // console.log(inputForm);
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
        // console.log(inputForm);
    }
    return (
        <>
            <Container>
                <h2 align="center">Edit Movies</h2>

                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Movie Name
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Movie Name" value={inputForm.name} name="name" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Movie Description" value={inputForm.desc}  name="desc" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="8">
                            <Form.Select name="category" onChange={handleChange} value={inputForm.category} >
                                <option>Select Movie Category</option>
                                {['Horror', 'Drama', 'Suspense', 'Comedy'].map((v, i) => (
                                    <option key={i} value={v}>{v}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Languages
                        </Form.Label>
                        <Col sm="8">
                            <Form.Select  name="Languages" onChange={handleChange} value={inputForm.Languages}>
                                <option>Select Movie Languages</option>
                                {['Gujarati', 'Hindi', 'English', 'Marathi', 'Telugu'].map((v, i) => (
                                    <option key={i} value={v}>{v}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Ticket Price
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="number" placeholder="Movie Ticket Price" value={inputForm.price} name="price" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Ticket Image
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text"  placeholder="Enter Movie URL" value={inputForm.img} name="img" onChange={handleChange} />
                        </Col>
                    </Form.Group>

                    <Button type="submit" className="px-4">
                        Edit Movie
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Editmovie;