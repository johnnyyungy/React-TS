import React, { useState } from 'react';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value); // Pass the search term to the parent component
    };

    return (
        <input
            type="text"
            id="search"
            className="search" // Add a class name for styling
            placeholder="Search toys..."
            value={searchTerm}
            onChange={handleInputChange}
        />
    );
};

export default Search;