
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
import { Authcontext } from "../components/provider/Authprovider";

const Login = () => {

const { sigIn , signInWithgoogle, }=useContext(Authcontext)
const navigate = useNavigate();
 const handelLogin = e =>{
    e.preventDefault()
    const from = e.target
    const email = from.email.value
    const password = from.password.value

    console.log(email,password);

    sigIn(email,password)
    .then(res =>{ console.log(res.user)
    navigate("/")
    return toast.success(" success full login ")
    
})
 .catch(error =>{
    console.log(error);
    return toast.error("error login plese try agin")
 })

 }

//  google login

const handelGoogleSignWith=()=>{
    signInWithgoogle()
    .then(res=>{
      console.log(res)
  
    })
    .catch(error=>{
      console.erro(error)
    
    })
}



    return (

            <div className="modal-box w-full mx-auto h-screen"> 
                <form onSubmit={handelLogin} className="card-body " >
                    <h3 className="font-bold text-2xl">Please Login </h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-green text-white">Login</button>
                    </div>
                </form>
                <div className="text-center"> Are you new here? || <a href="/signUp">Sign Up</a> 
                
                  
                </div>    
                <div className=" mt-3   ">
                   <div className=" w-full text-center justify-center flex gap-2 text-xl  mx-auto">
                   <button className="btn btn-circle hover:text-white hover:bg-green bg-gray-300">
                   <FaFacebook></FaFacebook>
                    </button> 
                    <button onClick={handelGoogleSignWith} className="btn btn-circle hover:text-white bg-gray-300 hover:bg-green">
                    <FaGoogle></FaGoogle>
                    </button>
                   </div>
                   </div>    
            </div>
          
    
    );
};

export default Login;
