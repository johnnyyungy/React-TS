import React from 'react';
import { Toy } from '../types/Toy';

interface ToyItemProps {
    toy: Toy;
}

const ToyItem: React.FC<ToyItemProps> = ({ toy }) => {
    return (
        <div className="pod">
            <div className="prodpic">
                <img src={toy.image} alt={toy.name} />
            </div>
            <div className="prodinfo">
                <p>
                    {toy.category}
                    <br />
                    {toy.code && (
                        <>
                            {toy.code}
                            <br />
                        </>
                    )}
                    {toy.name}
                </p>
            </div>
        </div>
    );
};

export default ToyItem;