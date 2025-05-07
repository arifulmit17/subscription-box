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
            <title>Profile</title>
        </Helmet>
        <Navbar></Navbar>
        <div className='w-9/12 bg-base-400 m-10 mx-auto flex gap-20'>
            <img className='size-[300px] rounded-2xl' src={user.photoURL} alt="" />
            <div className='bg-white w-full h-[300px] rounded-2xl'>
            <h1>User name: {user.displayName}</h1>
            <h1>Email : {user.email}</h1>
            </div>
            <div className='flex flex-col gap-5'>
                <h1>Update user profile name and picture</h1>
                <form onSubmit={handleUpdate}>
                <input className='bg-white m-3 p-3 rounded-xl'  type="text" placeholder='Username' name='name' />
                <br />
                <input className='bg-white m-3 p-3 rounded-xl'  type="url" placeholder='PhotoUrl' name='photo' />
                <br />
                <button className='btn m-3 btn-primary' type='submit'>Update</button>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
        
    );
};

export default UserProfile;