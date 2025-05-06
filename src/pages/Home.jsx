import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Item from './Item';
import netflix from '../assets/Netflix.png'
import prime from '../assets/Prime.jpg'
import apple from '../assets/apple-tv.png'
import hbo from '../assets/hbo.png'
import Tsports from '../assets/TSports.png'
import Youtube from '../assets/youtube.jpg'
import Member from '../assets/Members.jpg'



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Home = () => {
    const data=useLoaderData();
    
    return (
        <div>
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
          <img src={apple} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hbo} />
        </SwiperSlide>
      </Swiper>
            </div>
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
            <div  className='w-11/12 mx-auto flex'>
                <div className='w-5/12 '>
                    <img className='rounded-2xl' src={Member} alt="" />
                </div>
                <div className='w-7/12'>
                    <h1>Member's Benefit</h1>
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
  <div className="collapse-content text-sm">Click the "Register" button in the top  and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to profile page and give new information and click update to make changes.</div>
</div>
                </div>
            </section>
            
        </div>
        </div>
        
    );
};

export default Home;