import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const UserProfile = () => {
    const {user}=use(AuthContext)
    return (
        <div>
            

            <h1>User email: {user.email}</h1>
        </div>
    );
};

export default UserProfile;