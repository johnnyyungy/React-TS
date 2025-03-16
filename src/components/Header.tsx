import React from 'react';
import Search from './Search'; // Import the Search component

interface HeaderProps {
    onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    return (
        <header>
            <a href="#" className="logo">
                <img src="images/logo.png" alt="Logo" />
            </a>
            <Search onSearch={onSearch} /> {/* Add the Search component here */}
        </header>
    );
};

export default Header;