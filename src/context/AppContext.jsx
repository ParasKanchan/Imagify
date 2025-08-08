// import axios from "axios";
// import { createContext, useEffect } from "react";
// import {useNavigate} from 'react-router-dom'
// import { useState } from "react";
// import { toast } from "react-toastify";


// export const AppContext = createContext()

// const AppContextProvider = (props)=>{
    
//     const [user,setUser] = useState(null); 
//     const [showLogIn,setShowLogIn] = useState(false);
//     const [token,setToken] = useState(localStorage.getItem('token'))
//     const [credits,setCredits] = useState(5);

//     const navigate = useNavigate()

//     const backEndURL = import.meta.env.VITE_BACKEND_URL

//     const loadCreditsData = async () => {
//           console.log("Sending token:", token);
//           if (!token) {
//             console.log("Token missing, skipping loadCreditsData()");
//             return;
//           }
        
//           try {
//             const { data } = await axios.get(`${backEndURL}/api/user/credits`, {
//               headers: { token },
//             });
//             console.log("Credits Data is", data);
//             if (data.success) {
//               setCredits(data.credits);
//               setUser(data.user);
//             } else {
//               setUser(null);
//             }
//           } catch (error) {
//             console.log("Error loading credits:", error);
//             toast.error(error.message);
//           }
//         };
        

//     // const loadCreditsData = async ()=>{
//     //     try {
//     //         const token = localStorage.getItem("token");
//     //         if (!token) return;
//     //         const {data} = await axios.get(`${backEndURL}/api/user/credits`,{headers:{token}})
//     //         console.log("Data is ",data)
//     //         if(data.success){
//     //             setCredits(data.credits)
//     //             setUser(data.user)
//     //         }else{
//     //             setUser(null)
//     //         }

//     //     } catch (error) {
//     //         console.log(error)
//     //         toast.error(error.message)
//     //     }
//     // }

//     useEffect(()=>{
//         if(token){
//              loadCreditsData()
//         }

//     },[token]);

//         // const generateImage = async (prompt) => {
//         //   try {
//         //     const { data } = await axios.post(
//         //       backEndURL + '/api/image/generate-image',
//         //       { prompt },
//         //       { headers: { token } }
//         //     );
        
//         //     loadCreditsData(); // always reload credits
        
//         //     if (data.success) {
//         //       return { success: true, resultImage: data.resultImage };
//         //     } else {
//         //       toast.error(data.message);
//         //       return { success: false, creditBalance: data.creditBalance || 0 };
//         //     }
        
//         //   } catch (error) {
//         //     toast.error(error.message);
//         //     return { success: false, error: error.message };
//         //   }
//         // };
        
//         const generateImage = async (prompt) => {
            
//            try {
//            const {data} =  await axios.post(  `${backEndURL}/api/image/generate-image`, {prompt}, {headers: {token}})
//            if (data.success) {
//              loadCreditsData()
//              return data.resultImage
//            }
//            else {
//              toast.error(data.message)
//              if (data.creditBalance === 0) {
//                navigate("/BuyCredit")
//              }
//            }
       
//            } catch (error) {
//              console.log(error);
//              toast.error(error.message);
//            }
//          }
                

//     const value ={
//         user,setUser,showLogIn,setShowLogIn,backEndURL, token, setToken, credits, setCredits, loadCreditsData,
//         generateImage
//     }

//     return(
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }
// export default AppContextProvider

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate()

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
    const {data} =  await axios.post(backendUrl + "/api/image/generate-image", {prompt}, {headers: {token}})
    if (data.success) {
      loadCreditsData()
      return data.resultImage
    }
    else {
      toast.error(data.message)
      if (data.creditBalance === 0) {
        navigate("/buy")
      }
    }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  

  const logout = () =>{
    localStorage.removeItem('token')
    setToken('')
    setUser(null)
  }

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;