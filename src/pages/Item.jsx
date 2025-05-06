import React from 'react';
import { NavLink } from 'react-router';

const Item = ({item}) => {
    
    const {id,name,banner, thumbnail,tech_category,price,ratings}=item
    return (

        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <img className='w-full h-[200px]' src={banner} alt="" />
    <span className="badge badge-xs badge-warning">{tech_category}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">${price}/year</span>
      
    </div>
   <h1>Ratings: <span className="text-lg">{ratings}</span></h1> 
    
    <div className="mt-6">
      <button className="btn btn-primary btn-block"><NavLink to={`/SubscriptionDetails/${id}`}>View More</NavLink></button>
    </div>
  </div>
</div>
    );
};

export default Item;