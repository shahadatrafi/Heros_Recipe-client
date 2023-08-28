import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-110">
            <Container>
                <div className="row">
                    <div className="col-md-3">
                    <Link to='/' className='text-decoration-none text-white fs-3 fw-bold'>Heros <span className='text-danger'>Recipe</span></Link>
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur quidem <br></br>minima fugiat esse nam ex iure! Odio,<br></br> corrupti aliquam.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4 className='mb-4'>Customer Service</h4>
                        <ul className="list-unstyled">
                            <li className='my-2'><a className='text-decoration-none text-white' href="#">Your Favorites</a></li>
                            <li className='my-2'><a className='text-decoration-none text-white' href="#">FAQs</a></li>
                            <li className='my-2'><a className='text-decoration-none text-white' href="#">My Account</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className='mb-4'>Help</h4>
                        <ul className="list-unstyled">
                            <li className='my-2'><a className='text-decoration-none text-white' href="#">Customer Support</a></li>
                            <li className='my-2'><a className='text-decoration-none text-white' href="#">Privacy and Policy</a></li>
                            <li className='my-2'><a className='text-decoration-none text-white' href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className='mb-4'>Contact Information</h4>
                        <p>
                            Phone: +79125368410
                            <br />
                            Email: contact@herosrecipe.com
                            <br />
                            Location: 2no gate, Chittagong
                        </p>
                        <div className="d-flex">
                            <IoLogoFacebook className="fs-4 me-3  rounded" />
                            <IoLogoInstagram className="fs-4 me-3  rounded" />
                            <IoLogoLinkedin className="fs-4 me-3  rounded" />
                            <IoLogoTwitter className="fs-4 me-3  rounded" />
                        </div>
                    </div>
                </div>
            </Container>
            <hr className="bg-light" />
            <p className="text-center mb-0">Copyright 2023 by Heros Recipe All Right Reserved.</p>
        </footer>
    );
};

export default Footer;
