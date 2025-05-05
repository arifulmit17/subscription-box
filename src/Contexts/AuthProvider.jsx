import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const LogOutUser=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('useeffect ',currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const userInfo={
       createUser,
       LoginUser,
       user,
       LogOutUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;