import React from 'react';
import { Container } from 'react-bootstrap';
import ChefCards from '../ChefCards/ChefCards';
import Gallery from '../Gallery/Gallery';
import Testimonials from '../Testimonials/Testimonials';
import Slider from './slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Container>
            <ChefCards></ChefCards>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
            </Container>
        </div>
    );
};

export default Home;