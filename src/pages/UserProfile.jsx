import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import swal from 'sweetalert';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
const UserProfile = () => {
    const {user,setUser,updateUser}=use(AuthContext)
    const handleUpdate=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        console.log(name,photo);
        updateUser({displayName: name, photoURL : photo}).then(()=>{
            setUser({...user,displayName: name, photoURL : photo})
            swal('Update Successful')
          }).catch(error=>{
            console.log(error);
            setUser(user)
          })
    }
    return (
        <>
        <Helmet>
            <title>Subscription-box | Profile</title>
        </Helmet>
        <Navbar></Navbar>
        <h1 className='text-center font-bold text-4xl m-5'>User Profile</h1>
        <div className='w-9/12 bg-base-400 m-10 mx-auto lg:flex  gap-20'>
            <img className='size-[300px] rounded-2xl' src={user.photoURL} alt="" />
            <div className='bg-white flex flex-col  p-5 w-full h-[300px] rounded-2xl'>
                <h1 className='mb-5'> <span className='font-bold'>User name:</span>  {user.displayName}</h1>
                
                 <h1 className='mb-5'> <span className='font-bold'>Email :</span>  {user.email}</h1>
                 
                 <h1> <span className='font-bold'>PhotoUrl :</span>  {user.photoURL}</h1>


            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold' >Update user profile name and picture</h1>
                <form onSubmit={handleUpdate}>
                <input className='bg-white m-3 p-3 rounded-xl'  type="text" placeholder='Username' name='name' />
                <br />
                <input className='bg-white m-3 p-3 rounded-xl'  type="url" placeholder='PhotoUrl' name='photo' />
                <br />
                <button className='btn m-3 text-white bg-gray-400' type='submit'>Update</button>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
        
    );
};

export default UserProfile;