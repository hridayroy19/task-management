import React, { useContext } from 'react';
import { Authcontext } from './provider/Authprovider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user , logOut} = useContext(Authcontext)
  console.log(user);
  const handelSignout =()=>{
    logOut()
    .then()
    .catch()
  }
    return (
        <div>
            <div className="navbar bg-base-00">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Task Managemant</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
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