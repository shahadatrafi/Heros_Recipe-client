import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from '../../Provider/AuthProvider';
// import app from '../Firebase/firebase.init';


const Login = () => {
    const {SignInUser} = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { GoogleSignIn } = useContext(AuthContext);
    const { GithubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        GoogleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                setSuccess("User Logged In Successfully ")
                console.log(user)
                navigate(from)
            })
            .catch(error => {
                console.log("error", error.message)
                setError(error.message)
            })
    }
    const handleGithubSignIn = () => {
        GithubSignIn(githubProvider)
            .then(result => {
                const user = result.user
                setSuccess("User Logged In Successfully ")
                console.log(user)
                navigate(from)
            })
            .catch(error => {
                console.log("error", error.message)
                setError(error.message)

            })
    }

    const handleLogin=(event)=>{
        event.preventDefault();
        setSuccess('')
        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        SignInUser(email, password)
        .then(result => {
            setSuccess('User Logged In Successfully')
            navigate(from)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <Container className='w-25 mx-auto my-5'>
            <h4>Please Login</h4>
            <Form onSubmit={handleLogin}>
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
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                        {error}
                </Form.Text>
                <Button className='w-100 my-2' variant="danger" type="submit">
                    Login
                </Button>
                <Button onClick={handleGoogleSignIn} className='w-100 mb-2' variant="danger" >
                    <FaGoogle></FaGoogle> Login With Google
                </Button>
                <Button onClick={handleGithubSignIn} className='w-100 mb-2' variant="danger" >
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