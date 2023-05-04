import React from 'react';
import { Container } from 'react-bootstrap';
import banner  from '../../assets/banner.jpg'

const Home = () => {
    return (
        <div>
            <Container className='d-flex align-items-center gap-5'>
                <div>
                    <h2 className='fs-1'>Heros <span className='text-danger'>Recipe</span></h2>
                    <h4>Hero's Recipe is a food company that creates unique and healthy recipes using high-quality ingredients. </h4>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Home;