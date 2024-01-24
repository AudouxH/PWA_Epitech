import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSpoonacularAPI from '../../hooks/useSpoonacularAPI';

const RecipeInstruction = () => {
  const location = useLocation();
  const { recipeId } = location.state || {};
  const { getRecipeInstructionById } = useSpoonacularAPI();
  const [recipeInstruction, setRecipeInstruction] = useState();

  useEffect(() => {
    const fetchInstruction = async () => {
      const instruction = await getRecipeInstructionById(recipeId);
      instruction && instruction !== null && setRecipeInstruction(instruction);
    };
    fetchInstruction();
  }, [recipeId, getRecipeInstructionById]);

  return (
    <div>
      <h2>Page d'une recette avec l'id {recipeId}</h2>
      {recipeInstruction && <>
        <p>Je suis une instruction de recette</p>
      </>}
    </div>
  );
};

export default RecipeInstruction;