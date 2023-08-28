import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import slide1 from '../../../assets/slider-bg/1.jpg';
import slide2 from '../../../assets/slider-bg/2.jpg';
import slide3 from '../../../assets/slider-bg/3.jpg';

const slides = [
    {
      image: slide1,
      title: "Let's Start Cooking\nWith Our Expert Chefs",
      description:
        "Explore a world of culinary delight with our team of expert chefs. Food prices are approaching an all-time high due to various factors. Climate change has been affecting food production, leading to an increase in prices over time. Additionally, the recent COVID-19 pandemic has further disrupted supply chains.",
      button: 'Get Started!',
    },
    {
      image: slide2,
      title: 'Discover Fresh Ingredients\nFrom Local Farmers',
      description:
        'We source our ingredients directly from local farmers to ensure freshness and support our community. Our commitment to sustainable practices allows us to provide you with the best quality ingredients while minimizing our environmental impact.',
      button: 'Learn More',
    },
    {
      image: slide3,
      title: 'Cooking Made Easy\nWith Our Step-by-Step Recipes',
      description:
        'Our step-by-step recipes make cooking a breeze, even for beginners. Whether you’re a seasoned chef or just starting out, our easy-to-follow instructions will help you create delicious meals in no time. Join us in the joy of cooking!',
      button: 'Try It Now',
    },
  ];
  

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide"
          style={{ height: '650px' }}
        >
          <div
            className="position-relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          >
            <div className="position-absolute top-0 start-0 bg-black opacity-50 w-100 h-100"></div>
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center px-4 w-75">
              <h2 className="fs-1 font-semibold mb-2">{slide.title}</h2>
              <p className='my-5 w-50 mx-auto'>{slide.description}</p>
              <button className='btn btn-lg btn-outline-danger'>{slide.button}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
