import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaRegStar } from "react-icons/fa";
import swal from 'sweetalert';
const SubscriptionDetails = () => {
  const [reviews,setReviews]=useState([])
  const [rating,setRatings]=useState([])

  const handleSubscription=()=>{
    swal('Subscribed successfully !' )
  }
  
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
    const {
        description,
        name,
        subscription_benefits,
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
    <h1 className='ml-4' >Give your review:</h1>
    <input className='p-3 w-full' name='review' type="text" placeholder='review'/>
    <br />
    <h1 className='ml-4'>Give your rating:</h1>
    <input
  type="number"
  className="input validator w-full"
  required
  placeholder="Type a number between 1 to 5"
  min="1"
  max="5"
  name='rating'
/>
    {/* <input className='p-3'  type="text" placeholder='rating'/> */}
    <br />
    <button className='btn w-full my-3 bg-gray-400 text-white flex items-center'>Submit</button>
  </form>
        </div>     
  
  <div className="card-body w-4/12">
    <h2 className="card-title">
      {name}
      <div className="badge badge-neutral badge-outline">{tech_category}</div>
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
      <button onClick={handleSubscription} className='btn bg-gray-400 text-white'>Subscribe Now</button>
      
    </div>
    
  </div>
  <div className='w-4/12 bg-base-200 rounded-2xl'>
    <div className='h-1/3 m-5 overflow-scroll' >
    <h1>reviews</h1>
    <ul>
      {reviews.map(review=><li className='bg-white p-2'>{review}</li>)}
      </ul>
    </div>
      
    <div className='h-1/3 m-5 bg-base-200'>
        <h2>ratings</h2>
        <ul className='h-1/2'>
        {rating.map(rate=><li className='bg-white p-2 flex'>{rate} <FaRegStar />
          </li>)}
        </ul>
      </div>
    </div>
    
</div>
    );
};

export default SubscriptionDetails;