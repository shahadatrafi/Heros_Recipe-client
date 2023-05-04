import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare , FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";

const Footer = () => {
    return (
        <Container>
            <div className='d-flex justify-content-between mt-5'>
            <div>
            <h4>Find Us On</h4>
            <FaFacebookSquare className='fs-4 me-3 mt-4 text-danger rounded'></FaFacebookSquare>
            <FaInstagramSquare className='fs-4 me-3 mt-4 text-danger rounded'></FaInstagramSquare>
            <FaYoutubeSquare className='fs-4 me-3 mt-4 text-danger rounded'></FaYoutubeSquare>
            </div>
            <div>
                <h4>Contact</h4>
                <h6>Phone: +79125368410</h6>
                <h6>Email: contact@herosrecipe.com</h6>
                <h6>Location: 2no gate, Chittagong</h6>
            </div>
            </div>
            <hr />
            <p className='text-center'>Copyright 2023 by Heros Recipe All Right Reserved.</p>
        </Container>
    );
};

export default Footer;