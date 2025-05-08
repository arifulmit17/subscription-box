import React, { use } from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'
import { AuthContext } from '../../Contexts/AuthContext';
import swal from 'sweetalert';
const Navbar = () => {
    const {user, LogOutUser}=use(AuthContext);


    const handleLogout=()=>{
      LogOutUser().then(()=>{
        swal('signout successful');
      })
      .catch(error=>{
        console.log(error);
      })
    }

    const links=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    
    {!user && <>
      <li><NavLink to={'/login'}>Login</NavLink></li>
    </> }
    <li><NavLink to={'/register'}>Register</NavLink></li>
    {user && <>
      <li><NavLink to={'/userprofile'}>Profile</NavLink></li>
    </> } 
    
    </>
    return (
        <div className="navbar text-white bg-gray-400 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex gap-1'>
      <img src={'sub.png'} alt="" />
      <h1 className=" text-2xl font-bold">Subscription-box</h1>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="flex-col lg:flex-row  gap-4 navbar-end">
  
    {user? <>
      <h1>{user.email}</h1>
      <div className="w-10">
      
          <img className='rounded-full myDIV'
            alt="Tailwind CSS Navbar component"
            
            src={`${user? user.photoURL: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}`} />
        <div className="hide">{user.displayName}</div>
        
        </div>
      <a onClick={handleLogout} className='btn bg-white'>Log out</a>
    </> : <NavLink className='btn bg-white'  to={'/login'}>Login</NavLink>}
  </div>
</div>
    );
};

export default Navbar;