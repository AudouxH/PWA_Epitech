import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/HomePage';
import RecipeInstruction from './components/RecipeInstructions';
import RecipesResultPage from './components/RecipesResultPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='appContainer'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipeInstruction" element={<RecipeInstruction />} />
          <Route path="/recipesResultPage" element={<RecipesResultPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;