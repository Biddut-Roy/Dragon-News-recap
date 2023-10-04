import { Link } from "react-router-dom";
import Navbar from "../Sheare/Navbar";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(authContext)

    const handelRegister=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const name = form.get("name")
        const photo = form.get("url")

        createUser(email , password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })

    }

    
    return (
        <div>
        <Navbar></Navbar>

        <h1 className="text-5xl font-bold text-center my-10">Please register now!</h1>
         <div className=" flex justify-center">
        
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form className="card-body"  onSubmit={handelRegister}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="name" placeholder="name" name="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Profile photo</span>
        </label>
        <input type="url" placeholder=" photo url" name="url" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register now</button>
      </div>
      <div>
        <p>already have a account <span className=" text-cyan-500 font-semibold"><Link to={"/login"}>Log in</Link></span></p>
      </div>
    </form>
  </div>

         </div>
    </div>
    );
};

export default Register;