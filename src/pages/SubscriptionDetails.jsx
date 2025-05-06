import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const SubscriptionDetails = () => {
    const itemData=useLoaderData();
    const {id}=useParams();
    console.log(id);
    const singleService= itemData.find(item=> item.id == id)
    console.log(singleService);
    const {banner,
        description,
        name,
        number_of_reviews,
        subscription_benefits,
        ratings,
        thumbnail,
        features,
        tech_category}=singleService
    return (
        <div className="card my-20 mx-auto bg-base-100 w-96 shadow-sm">
            
  <figure>
    <img
      src={thumbnail}
      alt="service" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-soft badge-accent">{tech_category}</div>
    </h2>

    <p>{description}</p>
    <div>
    <h3 className='text-red-400'>Features</h3>
    <ul className=" flex flex-col gap-2 text-xs">
        {
            features.map(benefit=> <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{benefit}</span>
              </li> )
        }
      
    </ul>
    </div>
    <div>
    <h3 className='text-red-400'>Subscription Benefits</h3>
    <ul className=" flex flex-col gap-2 text-xs">
        {
            subscription_benefits.map(benefit=> <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{benefit}</span>
              </li> )
        }
      
    </ul>
    </div>
    
    <div className="card-actions justify-end">
      <button className='btn btn-soft btn-accent'>Subscribe Now</button>
      
    </div>
  </div>
</div>
    );
};

export default SubscriptionDetails;