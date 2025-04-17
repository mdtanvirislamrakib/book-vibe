import React from 'react';
import bannerImage from '../../assets/bannerImage.png'

const Banner = () => {
    return (
        <div className='bg-gray-200 py-10 rounded-2xl mb-10'>
            <div className='flex items-center justify-around w-full mx-auto flex-col lg:flex-row'>
                <div className='max-w-xl'>
                    <h1 className='lg:text-6xl font-bold text-2xl'>Books to freshen up your bookshelf</h1>
                    <button className='btn btn-success mt-6'>View The List</button>
                </div>
                <div className='max-w-4/12' >
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;