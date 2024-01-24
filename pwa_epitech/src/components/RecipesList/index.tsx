import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import logoApp from '../assets/logo.jpg';

interface RecipesListProps {
    recipes: never[];
  }
  
  const RecipesList: React.FC<RecipesListProps> = ({ recipes })=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        {recipes.map((item: any, index: number) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <img src={item.image && item.image !== null ? item.image : logoApp} alt={item.title} />
          </div>
        ))}
      </Slider>
    );
  };
export default RecipesList;