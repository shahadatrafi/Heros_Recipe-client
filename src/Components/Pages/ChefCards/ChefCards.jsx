import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { IoFastFoodSharp, IoHeartHalf, IoMedal } from "react-icons/io5";

const ChefCards = () => {
  const chefs = useLoaderData();
  return (
    <Container className="mt-110">
      <h4 className="fs-1 text-center ">
         Our <span className="text-danger fw-bold">Experienced</span>{" "}
        Chefs
      </h4>
      <hr className="text-danger mb-5 mx-auto w-25" />
      {
        <Container>
          <Row sm={1} md={3} className="g-3">
            {chefs.map((chef) => (
              <Col key={chef.id}>
                <Card className="border border-2 border-danger h-100">
                  <Card.Img
                    variant="top"
                    style={{ height: "70%", width: "80" }}
                    src={chef.chef_picture}
                  />
                  <Card.Body className="d-flex mt-4 justify-content-center align-items-center flex-column">
                    <Card.Title className="fs-3">
                      {" "}
                      Name:{" "}
                      <span className="text-danger">{chef.chef_name}</span>
                    </Card.Title>

                    <div className="d-flex justify-content-between my-2">
                      <Card.Text>
                        <span className="fw-semibold ">
                          <IoMedal className="text-danger fs-4 " /> Exp:
                        </span>{" "}
                        {chef.years_of_experience} Years
                      </Card.Text>
                      <Card.Text className="mx-2">
                        <span className="fw-semibold">
                          <IoFastFoodSharp className="text-danger fs-4" />{" "}
                          Recipes:
                        </span> {chef.num_recipes}
                      </Card.Text>
                      <Card.Text>
                        <span className="fw-semibold">
                          <IoHeartHalf className="text-danger fs-4 " /> Likes:
                        </span>{" "}
                        {chef.likes}+
                      </Card.Text>
                    </div>
                    <Link to={`/chefData/${chef.id}`}>
                      <Button className="mt-auto" variant="danger">
                        View Recipes
                      </Button>
                    </Link>
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
