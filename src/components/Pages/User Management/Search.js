import React,{useState,useEffect} from 'react'
import {CiSearch} from "react-icons/ci";
import {SearchStyle,IconStyle} from "./Style/SearchStyle.js"
import Table from './Table.js';
const Results = () => (
    <div id="results" className="search-results">
     
    </div>
  )

const Search = () => {
  const[query,setQuery]=useState("");
  console.log(query);
    const [showResults, setShowResults] = useState(true);
  
    // const onClick = () =>{
    //     setShowResults(false)
        // const USER_API_URL ="https://talents-valley-backend.herokuapp.com/api/team/user/list?offset=0&search=mohamad.osama@gmail.com&limit=10";
        // fetch(USER_API_URL, {
        //       method: "GET",
        //       headers: { 
        //   "Content-Type": "application/json",
        // },
        //       body: JSON.stringify({
        //       }),
        //     })
        //     .then(response => response.json())
        //     .then(console.log(testUserData))
        //    .catch((error) => {
        //         console.log(error);
         
        //     });
    // } 
    
  return (
    <>

    {showResults ? (
        null
      ) :  <IconStyle ><CiSearch/></IconStyle>}
      <SearchStyle type="text" value={query} placeholder='Search' onChange={(e)=>setQuery(e.target.value)}/>
       <Table />
   
    </>
  )
}

export default Search
