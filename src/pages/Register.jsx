import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase.init';
import swal from 'sweetalert';
const Register = () => {
    const navigate=useNavigate();
    const {createUser,updateUser,setUser,user}=use(AuthContext)
    const [showpassword, setShowpassword]=useState(false)
    const provider=new GoogleAuthProvider()

    const handleGoogleSignIn=()=>{
      console.log('signed in');
      signInWithPopup(auth,provider).then(result=>{
        console.log(result);
        swal('signin successful')
        
      }).catch(error=>{
        console.log(error);
      })
    }

    const handleRegister=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        console.log(name,email,password,photo);
        
        createUser(email,password)
        .then(result=>{
            console.log(result)
            updateUser({displayName: name, photoURL : photo}).then(()=>{
              setUser({...user,displayName: name, photoURL : photo})
            }).catch(error=>{
              console.log(error);
              setUser(user)
            })
            navigate('/')
          }
            
          ).catch(error=>{
            console.log(error);
          })
    }

    return (
      
        <div className='max-w-sm mx-auto my-12'>
          <Helmet>
            <title>Subscription-box | Register</title>
        </Helmet>
          <h1 className='font-bold text-4xl my-5'>Please,Register Now !</h1>

            <form className='space-y-4' onSubmit={handleRegister} >

              {/* Google Login */}
              <div className="my-6 space-y-4">
		<button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		
	</div>
  <div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
              {/* Username */}
              <input type="text" name='name' placeholder="Username " className="input" />
              {/* PhotoUrl */}
              <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </g>
  </svg>
  <input
    type="url"
    
    placeholder="https://"
    name='photo'
    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
    title="Must be valid URL"
  />
</label>
<p className="validator-hint">Must be valid URL</p>
 {/* Email input */}
 
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input name='email' type="email" placeholder="mail@site.com" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  
<br />
            {/* Password input  */}
            <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <div className='relative'>
  <input
    type={showpassword ? 'text' : 'password'}
    name='password'
    required
    placeholder="Password"
    minLength="6"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
  />

  <button onClick={()=>{setShowpassword(!showpassword)}} className='btn btn-xs absolute left-60'>
  {
    showpassword ? <FaEyeSlash />
    : <FaEye />
  }
  </button>
  </div>
  
</label>
<p className="validator-hint hidden">
  Must be more than 6 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>
        {/* Submit */}
        <br />
        <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        <h1>Already registered, go to <NavLink to={'/login'} className={'text-blue-400'}> login</NavLink></h1>
        </div>
    );
};

export default Register;