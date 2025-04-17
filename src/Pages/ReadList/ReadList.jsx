import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';
import ReadBookList from '../ReadBookList/ReadBookList';


const ReadList = () => {
    const data = useLoaderData();
    console.log(data);
    const [listOfRead, setListOfRead] = useState([])
    useEffect(() => {
        const storedData = getStoredBook();
        const convertedStoredData = storedData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredData.includes(book.bookId))
        setListOfRead(myReadList);
    }, [data])
    return (
        <div>
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