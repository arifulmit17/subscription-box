import React, { Suspense } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Item from './Item';
import netflix from '../assets/Netflix.png'
import prime from '../assets/Prime.jpg'
import apple from '../assets/apple-tv.png'
import hbo from '../assets/hbo.png'
import Tsports from '../assets/TSports.png'
import Youtube from '../assets/youtube.jpg'
import Member from '../assets/member.png'



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet';
const Home = () => {
    const data=useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>
                    Subscription-box | Home
                </title>
            </Helmet>
            <div>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >


          <SwiperSlide>
          <img src={apple} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={netflix} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prime} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tsports} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Youtube} />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={hbo} />
        </SwiperSlide>
      </Swiper>
            </div>
            <h1 className='text-center text-3xl font-bold my-5'>Subscription Services</h1>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            {
                data.map(item=><Item key={item.id} item={item}></Item> )
            }
            </Suspense>
            
        </div>

        <div>
        <section className='my-10'>
            <h1 className='text-center text-3xl font-bold my-5'>Members Only</h1>
            <div  className='w-11/12 mx-auto lg:flex'>
                <div className='w-5/12 '>
                    <img className='md:w-[300px] ml-30 rounded-2xl' src={Member} alt="" />
                </div>
                <div className='w-7/12 mx-5 mb-5'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Member's Benefit</h1>
                    <p className='text-base md:text-lg lg:text-xl '>Our site focuses on creating a unique experience for our valued members through giving some opportunities that is rare in the subscription market. Benefits include.</p>
                    <ol className='h-1/2 mt-3 flex flex-col justify-between'>
                      <li>1. Easily browse, subscribe to, and manage monthly subscription boxes based on your preferences</li>

                      <li>2. A personalized experience where customers can select different boxes for various products or services</li>

                      <li>3. Each box is curated with items tailored to the user’s interests, ensuring that they receive something new and exciting each month</li>
                    </ol>
                    <NavLink to={'/register'}>
                     <button className='text-white ml-40 rounded-2xl btn bg-gray-400 btn-wide'>Register Now</button>
                     </NavLink>
                </div>
            </div>

            </section>
        </div>
        <div>

            <section className='w-11/12 mt-10 mx-auto '>
                <h1 className='text-center text-4xl font-bold'>F.A.Q</h1>
                <div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Register" button in the top or in the Member Only section above and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to profile page, give new information and click update to make changes.</div>
</div>
                </div>
            </section>
            
        </div>
        </div>
        
    );
};

export default Home;