import React, { useEffect, useState } from 'react';
import { Toy } from '../types/Toy';
import ToyItem from './ToyItem';

interface ToyListProps {
    searchTerm: string;
}

const ToyList: React.FC<ToyListProps> = ({ searchTerm }) => {
    const [toys, setToys] = useState<Toy[]>([]);
    const [filteredToys, setFilteredToys] = useState<Toy[]>([]);

    useEffect(() => {
        const fetchToys = async () => {
            const response = await fetch('toys.json');
            const data = await response.json();
            setToys(data.toys);
            setFilteredToys(data.toys); // Initialize filteredToys with all toys
        };

        fetchToys();
    }, []);

    useEffect(() => {
        // Filter toys whenever searchTerm changes
        const filtered = toys.filter(toy =>
            toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            toy.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (toy.code && toy.code.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredToys(filtered);
    }, [searchTerm, toys]);

    return (
        <div className="products">
            {filteredToys.map(toy => (
                <ToyItem key={toy.name} toy={toy} />
            ))}
        </div>
    );
};

export default ToyList;