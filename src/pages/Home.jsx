import React from 'react';
import { useLoaderData } from 'react-router';
import Item from './Item';

const Home = () => {
    const data=useLoaderData();
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(item=><Item key={item.id} item={item}></Item> )
            }
        </div>
    );
};

export default Home;