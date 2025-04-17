import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router";

const Book = ({ book }) => {
    console.log(book.bookName);
    return (
        <Link>
            <div className="card shadow-sm border rounded-2xl border-gray-300 p-5">
                <figure className="p-5 bg-[#F3F3F3] rounded-2xl">
                    <img
                        src={book.image}
                        alt="Shoes" className="max-h-56" />
                </figure>
                <div className="mt-5 flex flex-col justify-between">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#F3F3F3] text-green-500 px-3 py-1 rounded-xl">{book.tags[0]}</div>
                        <div className="bg-[#F3F3F3] text-green-500 px-3 py-1 rounded-xl">{book.tags[1]}</div>
                    </div>
                    <div className="space-y-1 my-5 flex-1">
                        <div className="flex gap-2 items-center">
                            <h2 className="text-xl lg:text-2xl font-bold">{book.bookName}</h2>
                            <span className="badge badge-secondary">{book.yearOfPublishing}</span>
                        </div>

                        <p className="text-sm font-bold text-gray-500">By: {book.author}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-lg text-gray-800 font-semibold">{book.category}</div>
                        <div className="flex items-center gap-2"><span>{book.rating}</span> <IoStarOutline /></div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;