import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';


const Login = () => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.log("error", error.message)
        })
    }
 
    return (
        <Container className='w-25 mx-auto my-5'>
            <h4>Please Login</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Button className='w-100 mb-2' variant="danger" type="submit">
                    Login
                </Button>
                <Button onClick={handleGoogleSignIn} className='w-100 mb-2' variant="danger" >
                    <FaGoogle></FaGoogle> Login With Google
                </Button>
                <Button className='w-100 mb-2' variant="danger" >
                    <FaGithub></FaGithub> Login With Github
                </Button>
                <br />
                <Form.Text>
                    Don't have an account? Please <Link className='text-danger fw-bold' to="/register">Register</Link>
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Login;