import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NutritionSection = () => {
  return (
    <Container>
      <h2 className='text-center mt-5 mb-4'>Nutrition</h2>
      <p>Eating a healthy and balanced diet is essential for maintaining good health and preventing chronic diseases. The Nutrition section of our website provides information on the nutritional value of different foods and how to create healthy meal plans.</p>
      <Row>
        <Col>
          <h3>What is Nutrition?</h3>
          <hr className='text-danger' />
          <p>Nutrition is the science that studies the interactions between living organisms and food. It encompasses the physiological processes by which the body assimilates and uses nutrients from food for growth, maintenance, and repair.</p>
        </Col>
        <Col>
          <h3>The Importance of a Balanced Diet</h3>
          <hr className='text-danger' />
          <p>A balanced diet that includes a variety of nutrient-dense foods is essential for maintaining good health. Nutrient-dense foods provide the body with essential vitamins, minerals, and other nutrients that are needed for optimal functioning.</p>
          <p>Eating a balanced diet can help prevent chronic diseases such as obesity, diabetes, and heart disease. It can also help maintain a healthy weight, improve mental health, and boost energy levels.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Creating a Healthy Meal Plan</h3>
          <p>Creating a healthy meal plan involves selecting a variety of nutrient-dense foods from all food groups. It is important to include a mix of fruits, vegetables, whole grains, lean proteins, and healthy fats.</p>
          <p>When planning meals, it is also important to consider portion sizes and to limit the consumption of foods high in saturated and trans fats, added sugars, and sodium.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NutritionSection;
