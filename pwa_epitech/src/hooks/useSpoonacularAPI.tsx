import axios from 'axios';

const useSpoonacularAPI = () => {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

    const getRandomRecipe = async () => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`
            );
            console.log('response data from getRandomRecipe:', response.data);
            return (response.data.recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const getRecipesByKeyword = async (keyword: string) => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?query=${keyword}&apiKey=${apiKey}&number=2`
            );
            console.log('response data from getRecipesByKeyword:', response?.data?.results);
            return (response?.data?.results);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    const getRecipeInstructionById = async (id: string) => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com//recipes/${id}/analyzedInstructions&apiKey=${apiKey}&number=2`
            );
            console.log('response data from getRecipesByKeyword:', response?.data?.results);
            return (response?.data?.results);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    return {
        getRandomRecipe,
        getRecipesByKeyword,
        getRecipeInstructionById
    };
};

export default useSpoonacularAPI;