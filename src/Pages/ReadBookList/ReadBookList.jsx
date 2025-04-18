import React from 'react';
import { MdDateRange, MdPeopleAlt } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";

const ReadBookList = ({ boi }) => {
    return (
        <div>
            
            <div className='mt-5'>
                <div className=' border rounded-2xl shadow border-gray-400 p-5 flex gap-10 flex-col lg:flex-row items-center'>
                    <div className='bg-[#1313130D] rounded-xl p-3 lg:w-[220px] w-[170px]'>
                        <img src={boi.image} alt="" className='lg:w-[200px] w-[150px] mx-auto' />
                    </div>
                    <div className='space-y-5 w-full'>
                        <div className='space-y-2'>
                            <h1 className='text-xl lg:text-3xl font-bold '>{boi.bookName}</h1>
                            <p className='text-sm lg:text-lg text-gray-500 font-semibold'>By: {boi.author}</p>
                        </div>
                        <div className='flex items-center gap-5 flex-col lg:flex-row'>
                            <p className='text-sm lg:text-lg font-bold text-gray-600'>Tag:</p>
                            {
                                boi.tags.map(tag => <p className="bg-[#F3F3F3] text-green-500 px-3 py-1 rounded-xl">#{tag}</p>)
                            }
                            <div className='flex items-center gap-1 text-gray-500 font-semibold'>
                                <MdDateRange />
                                <p>Year of publishing: {boi.yearOfPublishing}</p>
                            </div>
                        </div>

                        <div className='flex items-center lg:gap-10 gap-5'>
                            <div className='flex items-center gap-2 text-sm lg:text-lg text-gray-500 font-semibold'>
                                <MdPeopleAlt />
                                <p>Publisher: {boi.publisher}</p>
                            </div>
                            <div className='flex items-center gap-2 text-sm lg:text-lg text-gray-500 font-semibold'>
                                <LuFileSpreadsheet />
                                <p>Page: {boi.totalPages}</p>
                            </div>
                        </div>
                        <div className='border border-dashed border-gray-200 my-5'></div>

                        <div className='flex items-center gap-6'>
                            <p className='bg-[#328EFF26] px-5 py-2 text-[#328EFF] font-bold text-sm lg:text-lg rounded-4xl'>Category: {boi.category}</p>
                            <p className='text-[#FFAC33] bg-[#FFAC3326]  px-5 py-2 font-bold text-sm lg:text-lg rounded-4xl'>Rating: {boi.rating}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadBookList;