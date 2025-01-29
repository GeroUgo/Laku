import React from 'react';

const Redes: React.FC = () => {
    return (
        <div className='my-24 '>
            <div className='flex flex-col items-center'>
                <h1 className='text-white'>Redes Sociales</h1>
                <ul>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-white'>Facebook</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-white'>Twitter</a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-white'>Instagram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Redes;