import { useState, useEffect } from 'react';
import axios from 'axios';
import API from "../API/API.js"
const useAxiosFetch = (dataUrl) => {
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch (dataUrl,{
          method: "GET",
          headers: { 
           "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
        },
      })
      .then(response => response.json())
      .then((acualData)=>{
       console.log(acualData);
       setRepos(acualData.data.users)
       setIsLoading(false);  
       setFetchError(null);
        }).catch((error) => {
          console.log(error);
          setIsLoading(false);  
          setFetchError(true);
      }) 
      },[])

    return { fetchError, isLoading ,repos};
}

export default useAxiosFetch;