import React from 'react';


const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center mt-7'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4">
      <form className="card-body">
        <h1 className='text-center font-bold text-xl'>Register your account</h1>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Enter your photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input type="email" placeholder=" Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  text-white bg-[#403F3F]">Register</button>
         
        </div>
      </form>
    </div>
            
        </div>
    );
};

export default Register;