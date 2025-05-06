import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const UserProfile = () => {
    const {user,setUser,updateUser}=use(AuthContext)
    const handleUpdate=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        console.log(name,photo);
        updateUser({displayName: name, photoURL : photo}).then(()=>{
            setUser({...user,displayName: name, photoURL : photo})
          }).catch(error=>{
            console.log(error);
            setUser(user)
          })
    }
    return (
        <div className='flex gap-20'>
            <img src={user.photoURL} alt="" />
            <div>
            <h1>User name: {user.displayName}</h1>
            <h1>Email : {user.email}</h1>
            </div>
            <div className='flex flex-col gap-5'>
                <h1>Update user profile name and picture</h1>
                <form onSubmit={handleUpdate}>
                <input className='bg-white m-3 p-3 rounded-2xl'  type="text" placeholder='Username' name='name' />
                <br />
                <input className='bg-white m-3 p-3 rounded-2xl'  type="url" placeholder='PhotoUrl' name='photo' />
                <br />
                <button className='btn m-3 btn-primary' type='submit'>Update</button>
                </form>
            </div>
            
            
        </div>
    );
};

export default UserProfile;