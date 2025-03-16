import React, { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ToyList from '../components/ToyList';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div>
            <Header onSearch={handleSearch} />
            <Nav />
            <ToyList searchTerm={searchTerm} /> {/* Pass searchTerm to ToyList */}
            <Footer />
        </div>
    );
};

export default Home;