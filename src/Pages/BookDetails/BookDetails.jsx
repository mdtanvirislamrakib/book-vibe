import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';
import { ToastContainer, Bounce } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);


    const data = useLoaderData()

     let singleBook = data.find(book => book.bookId === bookId);
    console.log(singleBook);


    const handleMarkAsRead = (id) => {
        addToStoreDB(id);

    }
    return (
        <div className='mb-10'>
            <div className='flex items-center gap-10 justify-between flex-col lg:flex-row'>
                <div className='bg-[#F3F3F3] rounded-2xl'>
                    <img src={singleBook.image} alt="" className='w-4/5 lg:w-2xl lg:h-full mx-auto p-5' />
                </div>
                <div className='w-3/4'>
                    <div className='space-y-2.5 mb-4'>
                        <h1 className='text-xl lg:text-3xl font-bold'>{singleBook.bookName}</h1>
                        <p className='text-sm lg:text-lg font-semibold text-gray-400'>{singleBook.author}</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='border border-dashed border-gray-200'></div>
                        <p className='text-sm lg:text-lg font-bold text-gray-500'>{singleBook.category}</p>
                        <div className='border border-dashed border-gray-200'></div>
                    </div>

                    <div className='my-5'>
                        <p className='text-sm lg:text-lg text-gray-500 font-semibold'><span className='font-bold text-black '>Review: </span>{singleBook.review}</p>
                    </div>

                    <div className='flex items-center gap-10'>
                        <p className='text-lg font-bold'>Tag: </p>
                        <div className='flex gap-5 items-center'>
                            {
                                singleBook.tags.map(tag => <p className="bg-[#F3F3F3] text-green-500 px-3 py-1 rounded-xl">#{tag}</p>)
                            }
                        </div>
                    </div>

                    <div className='border border-dashed border-gray-200 my-5'></div>

                    <div className='space-y-2'>

                        <div className='flex items-center justify-between'>
                            <p className='text-sm lg:text-lg text-gray-500 font-semibold'>Number of Pages:</p>
                            <p className='text-sm lg:text-lg text-gray-900 font-bold'>{singleBook.totalPages}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm lg:text-lg text-gray-500 font-semibold'>Publisher:</p>
                            <p className='text-sm lg:text-lg text-gray-900 font-bold'>{singleBook.publisher}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm lg:text-lg text-gray-500 font-semibold'>Year of Publishing:</p>
                            <p className='text-sm lg:text-lg text-gray-900 font-bold'>{singleBook.yearOfPublishing}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm lg:text-lg text-gray-500 font-semibold'>Rating:</p>
                            <p className='text-sm lg:text-lg text-gray-900 font-bold'>{singleBook.rating}</p>
                        </div>
                        <div className='space-x-3 mt-5'>
                            <button className="btn btn-soft btn-success" onClick={() => handleMarkAsRead(id)}>Mark As Read</button>
                            <button className="btn btn-accent">Add to wishList</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    );
};

export default BookDetails;