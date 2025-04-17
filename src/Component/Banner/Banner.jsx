import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='bg-gray-200 py-10 rounded-2xl'>
            <div className='flex items-center justify-around w-full mx-auto'>
                <div className='max-w-xl'>
                    <h1 className='text-6xl font-bold'>Books to freshen up your bookshelf</h1>
                    <button className='btn btn-success mt-5'>View The List</button>
                </div>
                <div className='max-w-4/12' >
                    <img src={bookImage} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Banner;