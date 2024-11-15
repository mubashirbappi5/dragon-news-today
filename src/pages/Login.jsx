import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signinuser}=useContext(AuthContext)
  const handlelogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
    signinuser(email,password)
    .then((res)=>{
      console.log(res.user)

    })
    .catch(error=>{
      alert(error.message)
    })
  }
    return (
        <div className='min-h-screen flex justify-center items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4">
      <form onSubmit={handlelogin} className="card-body">
        <h1 className='text-center font-bold text-xl'>Login your account</h1>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  text-white bg-[#403F3F]">Login</button>
          <h5 className='text-center mt-4 text-sm'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-600'>Register</Link></h5>
        </div>
      </form>
    </div>
            
        </div>
    );
};

export default Login;