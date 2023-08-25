import React from 'react';
import { Container } from 'react-bootstrap';
import banner  from '../../../assets/banner.jpg'
import ChefCards from '../ChefCards/ChefCards';
import NutritionSection from '../Nutrition/NutritionSection ';
import FeedbackSection from '../ClientFeedback/ClientFeedback ';

const Home = () => {
    return (
        <Container>
            <div className='d-flex align-items-center gap-5 '>
                <div>
                    <h2 className='fs-1'>Heros <span className='text-danger'>Recipe</span></h2>
                    <h4>Hero's Recipe is a recipe showcase app </h4>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
            <ChefCards></ChefCards>
            <NutritionSection></NutritionSection>
            <FeedbackSection></FeedbackSection>
        </Container>
    );
};

export default Home;