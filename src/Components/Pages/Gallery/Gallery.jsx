import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

import img1 from '../../../assets/Gallery/1.jpg'; 
import img2 from '../../../assets/Gallery/2.jpg'; 
import img3 from '../../../assets/Gallery/3.jpg'; 
import img4 from '../../../assets/Gallery/4.jpg'; 
import img5 from '../../../assets/Gallery/5.jpg'; 
import img6 from '../../../assets/Gallery/6.jpg'; 

const Gallery = () => {
  return (
    <Container className='mt-110'>
      <h4 className="fs-1 text-center ">
        Our <span className="text-danger fw-bold">Recipe Gallery</span>
      </h4>
      <hr className="text-danger mx-auto w-25" />
      <p className='mb-5 w-100 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, maxime! In cum placeat corporis sed.</p>

      <Row className='mb-4'>
        {/* First Row */}
        <Col md={6}>
          <div className="image-container rounded">
            <img src={img1} alt="Image 1" className="img-fluid hover-zoom" />
            <div className="overlay rounded"></div>
          </div>
        </Col>
        <Col md={6}>
          <div className="image-container rounded">
            <img src={img2} alt="Image 2" className="img-fluid hover-zoom" />
            <div className="overlay "></div>
          </div>
        </Col>
      </Row>
      <Row>
        {/* Second Row */}
        <Col md={3}>
          <div className="image-container rounded">
            <img src={img3} alt="Image 3" className="img-fluid hover-zoom" />
            <div className="overlay rounded"></div>
          </div>
        </Col>
        <Col md={3}>
          <div className="image-container rounded">
            <img src={img4} alt="Image 4" className="img-fluid hover-zoom" />
            <div className="overlay rounded"></div>
          </div>
        </Col>
        <Col md={3}>
          <div className="image-container rounded">
            <img src={img5} alt="Image 5" className="img-fluid hover-zoom" />
            <div className="overlay rounded"></div>
          </div>
        </Col>
        <Col md={3}>
          <div className="image-container rounded">
            <img src={img6} alt="Image 6" className="img-fluid hover-zoom" />
            <div className="overlay rounded"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
