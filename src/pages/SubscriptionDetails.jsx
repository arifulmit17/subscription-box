import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const SubscriptionDetails = () => {
  const [reviews,setReviews]=useState([])
  const [rating,setRatings]=useState([])
  const handleReview=(e)=>{
    e.preventDefault();
    const review=e.target.review.value;
    const reviewRating=e.target.rating.value;
    console.log(review,reviewRating);
    setReviews([...reviews,review])
    setRatings([...reviewRating,rating])
    

  }
    const itemData=useLoaderData();
    const {id}=useParams();
    const singleService= itemData.find(item=> item.id == id)
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
        <div className="card flex flex-row my-20 mx-auto bg-base-100 w-11/12 shadow-sm">
    <div className='w-4/12'>
    <figure>
    <img className='w-[300px] mb-10'
      src={thumbnail}
      alt="service" />
  </figure>
  <form onSubmit={handleReview}>
    <input className='p-3' name='review' type="text" placeholder='review'/>
    <br />
    <input className='p-3' name='rating' type="text" placeholder='rating'/>
    <br />
    <button className='btn btn-accent'>Submit</button>
  </form>
        </div>     
  
  <div className="card-body w-4/12">
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
  <div className='w-4/12 bg-base-200'>
    <div className='h-1/2 ' >
    <h1>reviews</h1>
    <ul>
      {reviews.map(review=><li className='bg-white p-2'>{review}</li>)}
      </ul>
    </div>
      
    <div className='h-1/2 bg-base-200'>
        <h2>ratings</h2>
        <ul className='h-1/2 '>
        {rating.map(rate=><li>rating: {rate}</li>)}
        </ul>
      </div>
    </div>
    
</div>
    );
};

export default SubscriptionDetails;