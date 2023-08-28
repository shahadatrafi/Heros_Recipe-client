import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick'; // You'll need to install the react-slick package

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';

// Testimonial data (you can replace this with your actual data)
const testimonials = [
  {
    name: 'John Doe',
    company: 'ABC Corp',
    feedback: ' quam sapien. Suspendisse potenti. Nullam euismod nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod aliquam faucibus.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'loa dikal',
    company: 'XYZ Inc',
    feedback: ' quam sapien. Suspendisse potenti. Nullam euismod nulla. Phasellus ac quam sapien. Suspendisse potenti. Nullam euismod nulla sed eros commodo.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Bob Smith',
    company: '123 Co',
    feedback: ' quam sapien. Suspendisse potenti. Nullam euismod nulla. Pellentesque ut malesuada risus. In dapibus posuere nisl, eu euismod quam malesuada quis.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplay: true, 
    autoplaySpeed: 5000,
  };

  return (
    <Container className='testimonial-container position-relative py-5 rounded mt-110'>
      <h2 className='text-center position-absolute top-0 mt-110 start-50 fs-1'>What <span className='text-danger fw-bold'> They Say</span>
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Row key={testimonial.id} className='d-flex mx-5 justify-content-between align-items-center'>
            <Col className='col-3'>
              <img src={testimonial.image} alt={testimonial.name} className='client-image' />
            </Col>
            <Col className='col-9'>
              <div className='testimonial-details'>
                <h4 className='fw-semibold text-danger'>{testimonial.name}</h4>
                <p className='w-75'>{testimonial.feedback}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
