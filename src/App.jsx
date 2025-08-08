// import React,{useContext} from 'react'
// import Home from './pages/Home'
// import BuyCredit from './pages/BuyCredit'
// import Result from './pages/Result'
// import {Routes,Route} from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import LogIn from './components/LogIn'
// import { AppContext } from './context/AppContext'


// const App = ()=>{

//   const {showLogIn} = useContext(AppContext)

//   return(
//     <>
//      <div className='px-4 sm:px-10 md:px-14 lg:px-28
//       min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
//         <ToastContainer position="bottom-right" />
//         <Navbar/>
//         {showLogIn && <LogIn/>}
//           <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/result' element={<Result/>}/>
//             <Route path='/BuyCredit' element={<BuyCredit/>}/>
//           </Routes>
//           <Footer/>
//      </div>
//     </>
//   )
// }

// export default App
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Login from "./components/LogIn";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50" >
      <ToastContainer position="bottom-right"/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;