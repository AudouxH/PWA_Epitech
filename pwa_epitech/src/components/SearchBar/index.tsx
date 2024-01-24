import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

interface SearchBarProps {
}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        navigate('/recipesResultPage', { state: {
            keyword: query,
        } });
    };

    return (
        <div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for recipes..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;