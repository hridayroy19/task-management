import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from './provider/Authprovider';
import { Link } from 'react-router-dom';
import useAxiosPublic from './hooks/axiosPublic/AxiosPublic';

const Navbar = () => {
  const { user , logOut} = useContext(Authcontext)
  // console.log(user);
  const [userData, setUserData] = useState(null); 
  // console.log(userData.image);
  const axiosPublic = useAxiosPublic()

  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosPublic.get(`/user?email=${user?.email}`);
        const data = response.data; 
        setUserData(data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    if (user?.email) {
      fetchUserData();
    }
  }, [axiosPublic, user]);

  const handelSignout =()=>{
    logOut()
    .then()
    .catch()
  }
    return (
        <div>
            <div className="navbar bg-base-00">
  <div className="flex-1">
  <Link to={"/"} > <a className="text-green-600 font-medium text-xl">Task Managemant</a> </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userData?.photo} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={"/profile"}> <a className="justify-between">
            Profile
          </a></Link>
        </li>
        {
          user? <li><a onClick={handelSignout} >Logout</a></li> :<li> <Link to={"/login"}> <a>Loin</a> </Link></li>
        }
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;