import React, { useEffect, useState } from 'react';
import useSpoonacularAPI from '../../hooks/useSpoonacularAPI';
import { useLocation } from 'react-router-dom';

interface RecipeResultPageProps {
}

const RecipeResultPage: React.FC<RecipeResultPageProps> = ({ }) => {
  const [recipesList, setRecipeList] = useState();
  const { getRecipesByKeyword } = useSpoonacularAPI();
  const location = useLocation();
  const { keyword } = location.state || {};

  useEffect(() => {
    const fetchListOfRecipes = async () => {
      const resultList = await getRecipesByKeyword(keyword);
      resultList && resultList !== null && setRecipeList(resultList);
    };
    fetchListOfRecipes();
  }, [getRecipesByKeyword, keyword]);

  return (
    <div>
      <h2>Page d'une liste de result de recette qui est recherche a partir de cette query: {keyword}</h2>
      {recipesList && recipesList !== null && <>
        <p>Je suis une liste de recette</p>
      </>}
    </div>
  );
};

export default RecipeResultPage;