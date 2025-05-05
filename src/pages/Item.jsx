import React from 'react';
import { NavLink } from 'react-router';

const Item = ({item}) => {
    
    const {id,name,thumbnail,banner,subscription_benefits,tech_category,price,ratings}=item
    return (

        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <img src={thumbnail} alt="" />
    <span className="badge badge-xs badge-warning">{tech_category}</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">${price}/year</span>
      
    </div>
   <h1>Ratings: <span className="text-lg">{ratings}</span></h1> 
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        {
            subscription_benefits.map(benefit=> <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{benefit}</span>
              </li> )
        }
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block"><NavLink to={`/SubscriptionDetails/${id}`}>View More</NavLink></button>
    </div>
  </div>
</div>
    );
};

export default Item;