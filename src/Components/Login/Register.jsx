import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto my-5'>
            <h4>Please Register</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="img" placeholder="Enter your photo link" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                </Form.Group>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Button className='w-100 mb-2' variant="primary" type="submit">
                    Register
                </Button>
                <br/>
                <Form.Text>
                    Already Have an account? Please <Link to ="/login">Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;