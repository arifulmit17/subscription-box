import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
const Register = () => {

    const {createUser}=use(AuthContext)
    
    const handleRegister=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        console.log(name,email,password);
        
        createUser(email,password)
        .then(result=>{
            console.log(result)}
          ).catch(error=>{
            console.log(error);
          })
    }

    return (
        <div className='max-w-sm mx-auto my-12'>
          <h1 className='font-bold text-4xl my-5'>Please, Register Now !</h1>
            <form className='space-y-4' onSubmit={handleRegister} >
              {/* Username */}
              <input type="text" name='name' placeholder="Username " className="input" />
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
  <input
    type="password"
    name='password'
    required
    placeholder="Password"
    minLength="6"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
  />
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