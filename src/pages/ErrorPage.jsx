import React from 'react';
import errorimg from '../assets/page-not-found-error-404.jpg'
import { NavLink } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col h-[100vh] justify-center items-center'>
            <img src={errorimg} alt="" />
            <h1>Please go to  <NavLink to={'/'}> <span className='text-blue-400'>home page</span> </NavLink></h1>
        </div>
    );
};

export default ErrorPage;