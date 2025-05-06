import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Item from './Item';

const Home = () => {
    const data=useLoaderData();
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
            {
                data.map(item=><Item key={item.id} item={item}></Item> )
            }
            </Suspense>
            
        </div>
    );
};

export default Home;