import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const UserProfile = () => {
    const {user}=use(AuthContext)
    return (
        <div className='flex'>
            <img src={user.photoURL} alt="" />
            <div>
            <h1>User name: {user.displayName}</h1>
            <h1>Email : {user.email}</h1>
            </div>
            
            
        </div>
    );
};

export default UserProfile;