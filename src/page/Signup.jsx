import { useContext } from "react";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../components/provider/Authprovider";
import toast from "react-hot-toast";


const SignUp = () => {

  const {creatUser} = useContext(Authcontext)
  const naviget = useNavigate()
  const handelSignup = e => {
    e.preventDefault()
    const from = e.target
    const name = from.name.value
    const email = from.email.value
    const password = from.password.value
   
    const userInfo ={
       name,
       email,
       password

    }

    console.log(userInfo);
    creatUser(email,password)
    .then(res => {console.log(res.user)
    naviget("/")
    return toast.success('Successfully toasted!')

    })
    
    .catch(error =>{
      console.log(error);
      return toast.error("all ready use please try again ")
    })
  }

  return (
    <div>
      <div className="hero h-fit py-16">
   
        <div className=" flex items-center flex-wrap md:w-full justify-around">
       
          <div className=" relative w-full mx-5 text-center md:w-2/5">
            <img
              className=" "
              src="https://i.ibb.co/HCmFGGM/what-is-task-management.png"
              alt=""
            />
          </div>
          <button className=" absolute text-3xl p-1 text-green-500 border-2  mr-[80%] mb-[30%] rounded-full">  <Link to={"/"}> <IoMdHome/> </Link>  </button>

          <div className="shadow-2xl border bg-white rounded-xl mx-3 my-2 w-full md:w-2/5">
            <form  onSubmit={handelSignup} className="card-body w-full">
              {/* Name input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered" />
              </div>

              {/* email input box */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Email"
                  className="input input-bordered"
                />

              </div>
              {/* SignUp button  */}
              <div className="form-control mt-6">
                <button type="submit"  className={`btn bg-green-600 disabled:text-slate-600 hover:bg-orange-500 border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60`}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

