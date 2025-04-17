import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    return (
        <div>
            <h2 className='text-2xl lg:text-5xl text-center font-bold'>Books</h2>
            <Suspense fallback = {<span className="loading loading-spinner text-error"></span>}>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 my-10'>
                    {
                        data.map(book => <Book key={book.bookId} book = {book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;