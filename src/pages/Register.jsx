import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
  const {createuser,setuser}=useContext(AuthContext)
  const handleregister = (e)=>{
    e.preventDefault();
    const form = new FormData(e.target)
    const name =  form.get('name')
    const url = form.get('url')
    const email = form.get('email')
    const password = form.get('password')
    console.log(email,password)

    createuser(email,password)
    .then((res)=>{
      console.log(res.user)
      setuser(res.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
    return (
        <div className='min-h-screen flex justify-center items-center mt-7'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4">
      <form onSubmit={handleregister} className="card-body">
        <h1 className='text-center font-bold text-xl'>Register your account</h1>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='url' placeholder="Enter your photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input type="email" name='email' placeholder=" Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
  <label className="label cursor-pointer justify-start gap-2">
   
    <input type="checkbox" defaultChecked className="checkbox" />
    <span className="label-text">Accept <a href="" className='font-bold'> Term & Conditions</a></span>
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