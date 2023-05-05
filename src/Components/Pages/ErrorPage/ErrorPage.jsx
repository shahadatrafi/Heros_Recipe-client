import React from 'react';
import img from '../../../assets/10-17-57-227_640.jpg'
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mx-auto mt-5'>
            <Image className='mx-auto' src={img} fluid />
            <h4>Opppppppps....!! I think you are in the wrong place please go to <Link to="/"><Button className='my-2' variant="danger" type="submit">
                    Home
                </Button></Link></h4>
        </div>
    );
};

export default ErrorPage;