import React from 'react';
import { Container } from 'react-bootstrap';
import ChefCards from '../ChefCards/ChefCards';
import FeedbackSection from '../ClientFeedback/ClientFeedback ';
import Slider from './slider';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Container>
            <ChefCards></ChefCards>
            <Gallery></Gallery>
            <FeedbackSection></FeedbackSection>
            </Container>
        </div>
    );
};

export default Home;