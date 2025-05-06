import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Item from './Item';
import netflix from '../assets/Netflix.png'
import prime from '../assets/Prime.jpg'
import apple from '../assets/apple-tv.png'
import hbo from '../assets/hbo.png'
import Tsports from '../assets/TSports.png'
import Youtube from '../assets/youtube.jpg'

import  { useRef, useState } from "react";
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            {
                data.map(item=><Item key={item.id} item={item}></Item> )
            }
            </Suspense>
            
        </div>
        </div>
        
    );
};

export default Home;