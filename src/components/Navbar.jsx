// import React, { useContext } from 'react'
// import {assets} from '../assets/assets'
// import {Link, useNavigate} from 'react-router-dom'
// import BuyCredit from '../pages/BuyCredit'
// import { AppContext } from '../context/AppContext'
// import { toast } from 'react-toastify'

// const Navbar = ()=>{

//   const {user,setShowLogIn, setToken, setUser, credits} = useContext(AppContext)

//   const navigate = useNavigate();

//    const handleLogout = () => {
//    localStorage.removeItem('token');    // Remove token
//    setToken(null);                      // Clear context
//    setUser(null);                       // Clear context
//    setShowLogIn(true);                  
//    toast.success("Logged out successfully");
//   };

//   return (
//     <div className='flex items-center justify-between py-4'>
//         <Link to='/'>
//         <img src={assets.logo} 
//               alt="" className='w-28 sm:w-32 lg:w-40'/>
//         </Link>
//         <div>
//             {
//               user ?
//                <div className='flex items-center gap-4 sm:gap-6'>
//                 {/* this div will be used if user is logged in */}
//                  <button onClick={()=>navigate('/BuyCredit')} className='flex items-center bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full
//                                     hover:scale-105 transition-all duration-700'>
//                   <img className='w-5' src={assets.credit_star} alt="" />
//                   <p className='text-xs sm:text-sm font-medium text-gray-600="true"'>Credit left: {credits}</p>
//                  </button>
//                  <p text-gray-600="true" max-sm:hidden="true" pl-4="true">Hi, {user.name}</p>
//                  <div className='relative group'>
//                   <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
//                   <div className='absolute hidden group-hover:block
//                                  top-0 right-0 z-10 text-black rounded pt-12'>
//                         <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
//                           <li onClick={handleLogout}
//                            className='px-2 py-1 cursor-pointer pr-10'>
//                              LogOut
//                           </li>
//                         </ul>

//                   </div>
//                  </div>
//               </div>
//               :
//               <div className='flex items-center gap-2 sm:gap-5'>
//                 {/* And this will be used if user is not logged in */}
//                 <p onClick={()=>navigate('/BuyCredit')} 
//                 className='cursor-pointer'>Pricing</p>
//                 <button onClick={()=>setShowLogIn(true)}
//                  className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>LogIn</button>
//               </div>
//             }

//         </div>
//     </div>
//   );
// }

// export default Navbar
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to={"/"}>
        <img src={assets.logo} className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center justify-center text-center gap-2 sm:gap-3">
            <button
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition"
              onClick={() => navigate("/buy")}
            >
              <img src={assets.credit_star} className="w-5" />
              <p className="text-xs sm:text-sm font-md text-gray-600">
                Credits left : {credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 drop-shadow" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li onClick={logout} className="px-2 py-1 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p className="cursor-pointer" onClick={() => navigate("/buy")}>
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;