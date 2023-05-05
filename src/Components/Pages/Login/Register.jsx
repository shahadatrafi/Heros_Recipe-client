import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import app from '../Firebase/firebase.init'; 
// import { useState } from 'react';


// const auth = getAuth(app);

const Register = () => {

    const { RegisterUser, user } = useContext(AuthContext)
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess('')
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.img.value;

        if (password.length < 6) {
            setError('Please Set your password with 6 character')
            return;
        }

        RegisterUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setError('')
                event.target.reset()
                setSuccess('User Create Successfully')
                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: photo
                })
                .then(()=>{
                    console.log('profile updated')
                }).catch((error)=> {
                    console.error(error.message);
                })
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })
            

    }

    return (
        <Container className='w-25 mx-auto my-5'>
            <h4>Please Register</h4>
            <Form onSubmit={handleRegister}>
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
                        {success}
                </Form.Text>
                <Form.Text className="text-danger">
                        {error}
                </Form.Text>
                <Button className='w-100 my-2' variant="danger" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text>
                    Already Have an account? Please <Link className='text-danger fw-bold' to="/login">Login</Link>
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;