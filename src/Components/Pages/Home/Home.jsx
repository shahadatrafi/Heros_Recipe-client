import React from 'react';
import { Container } from 'react-bootstrap';
import banner  from '../../../assets/banner.jpg'
import ChefCards from '../ChefCards/ChefCards';
import NutritionSection from '../Nutrition/NutritionSection ';
import FeedbackSection from '../ClientFeedback/ClientFeedback ';
import Slider from './slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Container>
            <ChefCards></ChefCards>
            <NutritionSection></NutritionSection>
            <FeedbackSection></FeedbackSection>
            </Container>
        </div>
    );
};

export default Home;