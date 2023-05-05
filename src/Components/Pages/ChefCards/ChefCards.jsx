import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefCards = () => {
    const allChefData = useLoaderData()
    console.log(allChefData); 
    return (
        <Container>
            <h4>Here is Our Chefs</h4>
            {
                allChefData.map(cd=> {})
            }
        </Container>
    );
};

export default ChefCards;