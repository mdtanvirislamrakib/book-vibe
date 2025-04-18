import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import ReadBookList from '../ReadBookList/ReadBookList';
import { MdArrowDropDown } from "react-icons/md";

const ReadList = () => {
    const data = useLoaderData();
    console.log(data);
    const [listOfRead, setListOfRead] = useState([])
    const [sort, setSort] = useState("");
    const handleSortType = (type) => {
        setSort(type);
        if(type === "pages") {
            const sortByPage = [...listOfRead.sort((a, b) => a.totalPages - b.totalPages)];
            setListOfRead(sortByPage)
        }
        if(type === "ratings") {
            const sortByRating = [...listOfRead.sort((a, b) => a.rating - b.rating)];
            setListOfRead(sortByRating)
        }
    }
    useEffect(() => {
        const storedData = getStoredBook();
        const convertedStoredData = storedData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredData.includes(book.bookId))
        setListOfRead(myReadList);
    }, [data])
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="flex items-center bg-green-400 text-white text-lg lg:text-xl p-4 rounded-2xl cursor-pointer m-1">Sort By {sort ? sort : ""} <MdArrowDropDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSortType("pages")}>Pages</a></li>
                        <li><a onClick={() => handleSortType("ratings")}>Ratings</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>my read list{listOfRead.length}</h2>
                    {
                        listOfRead.map(boi => <ReadBookList key={boi.bookId} boi = {boi}></ReadBookList>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;