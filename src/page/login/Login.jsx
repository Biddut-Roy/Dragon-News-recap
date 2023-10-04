
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Sheare/Navbar";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { loginUser } = useContext(authContext)
    const location = useLocation()
    console.log("Log in location", location);
    const navigate = useNavigate()

    const handelLogin =(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")

        loginUser(email , password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state? location.state : "/" )
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
       
        <div>
            <Navbar></Navbar>

            <h1 className="text-5xl font-bold text-center my-10">Login now!</h1>
             <div className=" flex justify-center">
            
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body"  onSubmit={handelLogin}>
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
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            <p>You have a not account please <span className=" text-cyan-500 font-semibold"><Link to={"/register"}>Register</Link></span></p>
          </div>
        </form>
      </div>
   
             </div>
        </div>
    );
};

export default Login;