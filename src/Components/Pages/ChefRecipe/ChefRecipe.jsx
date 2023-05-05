import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Col, Image, Card, Button, CardGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefRecipe = () => {
    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);
    // const handleFavorite = () =>{
    //     setDisabled(true);
    //     toast.success('Recipe Added In Favorite', {
    //         position: toast.POSITION.TOP_CENTER
    //     });
    // }

    const chefDetails = useLoaderData();
    const {chef_name, chef_picture, id, likes, num_recipes,recipes, short_bio, years_of_experience
    } = chefDetails
    console.log(chefDetails)

    return (
        <div>
            <div className="bg-light mb-5">
      <Container>
        <Row className="align-items-center py-5">
          <Col md={4}>
            <Image src={chef_picture} alt={name} fluid roundedCircle />
          </Col>
          <Col md={8}>
            <h2>{chef_name}</h2>
            <p>{short_bio}</p>
            <p>Likes: {likes}</p>
            <p>Recipes: {num_recipes}</p>
            <p>Years of Experience: {years_of_experience}</p>
          </Col>
        </Row>
      </Container>
      </div>
      <Container>
      <CardGroup>
      <Row>
        <Col className='h-100' sm={1} md={4}>
          <Card className="h-100">
            <Card.Header>
              <h4>{recipes[0].recipe_name}</h4>
            </Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Ingredients:</Card.Title>
              <ul>
                {recipes[0].ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <Card.Title>Cooking Method:</Card.Title>
              <p>{recipes[0].cooking_method}</p>
              <div className='mt-auto'>
              <Card.Title>Rating: {recipes[0].rating} stars</Card.Title>
              <Button onClick={() =>{
        setDisabled1(true);
        toast.success('Recipe Added In Favorite', {
            position: toast.POSITION.TOP_CENTER
        });
    }}  disabled={disabled1} variant="danger">Add to Favorites</Button>
              <ToastContainer />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className='h-100' sm={1} md={4}>
          <Card className="h-100">
            <Card.Header>
              <h4>{recipes[1].recipe_name}</h4>
            </Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Ingredients:</Card.Title>
              <ul>
                {recipes[1].ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <Card.Title>Cooking Method:</Card.Title>
              <p>{recipes[1].cooking_method}</p>
              <div className='mt-auto'>
              <Card.Title>Rating: {recipes[1].rating} stars</Card.Title>
              <Button onClick={() =>{
        setDisabled2(true);
        toast.success('Recipe Added In Favorite', {
            position: toast.POSITION.TOP_CENTER
        });
    }}  disabled={disabled2} variant="danger">Add to Favorites</Button>
              <ToastContainer />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className='h-100' sm={1} md={4}>
          <Card className="h-100">
            <Card.Header>
              <h4>{recipes[2].recipe_name}</h4>
            </Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Title>Ingredients:</Card.Title>
              <ul>
                {recipes[2].ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <Card.Title>Cooking Method:</Card.Title>
              <p>{recipes[2].cooking_method}</p>
              <div className='mt-auto'>
              <Card.Title>Rating: {recipes[2].rating} stars</Card.Title>
              <Button onClick={() =>{
        setDisabled3(true);
        toast.success('Recipe Added In Favorite', {
            position: toast.POSITION.TOP_CENTER
        });
    }}  disabled={disabled3} variant="danger">Add to Favorites</Button>
              <ToastContainer />
              </div>
            </Card.Body>
          </Card>
        </Col>
    </Row>
      </CardGroup>
      </Container>
        </div>
    
    );
};

export default ChefRecipe;