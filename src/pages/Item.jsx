import React from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Item = ({item}) => {
  
    
    const {id,name,banner,tech_category,frequency,price,ratings}=item
    return (

        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <img className='w-full h-[200px]' src={banner} alt="" />
    <span className="badge badge-xs badge-neutral badge-outline">{tech_category}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">${price}/month</span>
      
    </div>
   <h1>Ratings: <span className="text-lg">{ratings}</span></h1> 
   <h1>Frequency: <span className="text-lg">{frequency}</span></h1> 

    
    <div className="mt-6">
    <NavLink to={`/SubscriptionDetails/${id}`}>
      <button className="btn text-white bg-gray-400 btn-block">View More </button>
      </NavLink>
    </div>
  </div>
</div>
    );
};

export default Item;