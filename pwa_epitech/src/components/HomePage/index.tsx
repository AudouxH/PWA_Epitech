import { useEffect, useState } from 'react';
import RecipesList from '../RecipesList';
import useSpoonacularAPI from '../../hooks/useSpoonacularAPI';
import './Home.css';
import logoApp from '../assets/logo.jpg';

const Home = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [meal, setMeal] = useState([]);
  const [dinner, setDinner] = useState([]);
  const { getRecipesByKeyword } = useSpoonacularAPI();

  useEffect(() => {
    const fetchBreakfast = async () => {
      const recipes = await getRecipesByKeyword("healthy breakfast");
      console.log("breakfast recipe:", recipes);
      recipes && recipes !== null && setBreakfast(recipes);
    };

    const fetchMeal = async () => {
      const recipes = await getRecipesByKeyword("brunch");
      console.log("main meal recipe:", recipes);
      recipes && recipes !== null && setMeal(recipes);
    };

    const fetchDinner = async () => {
      const recipes = await getRecipesByKeyword("healthy evening meal");
      console.log("dinner recipe:", recipes);
      recipes && recipes !== null && setDinner(recipes);
    };

    fetchBreakfast();
    fetchMeal();
    fetchDinner();
  }, []);

  return (
    <div className='HomePageContainer'>
      <div className='descriptionContainer'>
        <img src={logoApp} alt="logo de l'app" className='logoApp' />
        <div className="description">
          <p>
            Voyagez à travers les cuisines du monde sans quitter votre cuisine ! Cuisines du Monde vous emmène dans un tour gastronomique avec des recettes authentiques, des astuces culinaires et une exploration des ingrédients exotiques.
          </p>
        </div>

        {breakfast && breakfast !== null && <RecipesList recipes={breakfast} />}
        {meal && meal !== null && <RecipesList recipes={meal} />}
        {dinner && dinner !== null && <RecipesList recipes={dinner} />}
      </div>
    </div>
  );
};

export default Home;