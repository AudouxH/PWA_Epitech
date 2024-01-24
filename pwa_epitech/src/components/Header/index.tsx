import React from 'react';
import SearchBar from '../SearchBar';
import './Header.css';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <header>
      <div className='headerContainer'>
        <h1 className='title'>Cuisine du monde</h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
