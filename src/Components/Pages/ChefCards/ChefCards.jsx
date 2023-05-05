import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
const ChefCards = () => {
    const chefs = useLoaderData()
    return (
        <Container>
            <h4 className='text-center mt-5 mb-4'>Here is Our <span className='text-danger fw-bold'>Experienced</span> Chefs</h4>
            <hr className='text-danger mb-4'  />
            {
                <Container>
                <Row sm={1} md={3} className='g-3'>
                    {chefs.map((chef) => (
                        <Col className='h-100' key={chef.id} >
                            <Card className='border border-danger h-100'>
                                <Card.Img variant="top" src={chef.chef_picture} />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title> Name: {chef.chef_name}</Card.Title>
                                    <Card.Text className='fs-5'>
                                        <span className='fw-semibold'>Experience:</span> {chef.years_of_experience}
                                    </Card.Text>
                                    <Card.Text>
                                    <span className='fw-semibold'>Recipes:</span> {chef.num_recipes}
                                    </Card.Text>
                                    <Card.Text>
                                    <span className='fw-semibold'>Likes:</span> {chef.likes}
                                    </Card.Text>
                                    <Link to={`/chefData/${chef.id}`}><Button className='mt-auto'variant="danger">View Recipes</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            }
        </Container>
    );
};

export default ChefCards;