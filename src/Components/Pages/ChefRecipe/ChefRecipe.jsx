import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Row, Col, Image, Card, Button, CardGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoFastFoodSharp, IoHeartHalf, IoMedal } from "react-icons/io5";



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
          <Col className='col-4'>
            <Image className='client-image fluid' src={chef_picture} alt={name} />
          </Col>
          <Col className='col-7 ms-5'>

          <h2 className="fs-3">
                      {" "}
                      Name:{" "}
                      <span className="text-danger fw-bold">{chef_name}</span>
                    </h2>
                    <p className='fs-5 my-4'>{short_bio}</p>
          <div className=" justify-content-between my-2">
                      <p>
                        <span className="fw-semibold ">
                          <IoMedal className="text-danger fs-4 " /> Exp:
                        </span>{" "}
                        {years_of_experience} Years
                      </p>
                      <p>
                        <span className="fw-semibold">
                          <IoFastFoodSharp className="text-danger fs-4" />{" "}
                          Recipes:
                        </span> {num_recipes}
                      </p>
                      <p>
                        <span className="fw-semibold">
                          <IoHeartHalf className="text-danger fs-4 " /> Likes:
                        </span>{" "}
                        {likes}+
                      </p>
                    </div>
          </Col>
        </Row>
      </Container>
      </div>
      <Container className='mt-110'>
      <h4 className="fs-1 text-center ">
        {chef_name}'s <span className="text-danger fw-bold">Recipes</span>
      </h4>
      <hr className="text-danger mx-auto mb-5 w-25" />
      <CardGroup>
      <Row>
        <Col className='h-100' sm={1} md={4}>
          <Card className="h-100 border-0 shadow">
            <Card.Header className="bg-danger">
              <h4 className="text-white">{recipes[0].recipe_name}</h4>
            </Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='text-danger fw-semibold mb-3'>Ingredients:</Card.Title>
              <ul>
                {recipes[0].ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <Card.Title className='text-danger fw-semibold mb-3'>Cooking Method:</Card.Title>
              <p>{recipes[0].cooking_method}</p>
              <div className='mt-auto'>
              <Card.Title className='text-danger fw-semibold mb-3'>Rating: {recipes[0].rating} stars</Card.Title>
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
          <Card className="h-100 border-0 shadow">
            <Card.Header className="bg-danger">
              <h4 className="text-white">{recipes[1].recipe_name}</h4>
            </Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='text-danger fw-semibold mb-3'>Ingredients:</Card.Title>
              <ul>
                {recipes[1].ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <Card.Title className='text-danger fw-semibold mb-3'>Cooking Method:</Card.Title>
              <p>{recipes[1].cooking_method}</p>
              <div className='mt-auto'>
              <Card.Title className='text-danger fw-semibold mb-3'>Rating: {recipes[1].rating} stars</Card.Title>
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
          <Card className="h-100 border-0 shadow">
            <Card.Header className="bg-danger">
              <h4 className="text-white">{recipes[2].recipe_name}</h4>
            </Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='text-danger fw-semibold mb-3'>Ingredients:</Card.Title>
              <ul>
                {recipes[2].ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <Card.Title className='text-danger fw-semibold mb-3'>Cooking Method:</Card.Title>
              <p>{recipes[2].cooking_method}</p>
              <div className='mt-auto'>
              <Card.Title className='text-danger fw-semibold mb-3'>Rating: {recipes[2].rating} stars</Card.Title>
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