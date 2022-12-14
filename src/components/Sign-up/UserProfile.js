import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const UserProfile = async() => {
  useEffect(()=>{
localStorage.getItem("userData");
  },[])
    try {
    
        const USER_API_URLx = "https://talents-valley.herokuapp.com/api/settings/profile";
      const response = await axios.get(USER_API_URLx,
           {
            headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('User')}`,
           },
          withCredentials: true,
       
            }
         )
         console.log(JSON.stringify(response?.data));
         localStorage.setItem("userData", JSON.stringify(response.data));
    } catch (err) {
      console.log(err);
     }
  return (
    <div>
    UserProfile
    </div>
  )
}

export default UserProfile;
