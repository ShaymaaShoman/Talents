import React,{useState,useEffect} from 'react'
import {CiSearch} from "react-icons/ci";
import useAxiosFetch from '../../../hook/useAxiosFetch.js';
import {SearchStyle,IconStyle} from "./Style/SearchStyle.js"
import Table from './Table.js';
// const Results = () => (
//     <div id="results" className="search-results">
     
//     </div>
//   )

const Search = () => {

    const [showResults, setShowResults] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const{repos}=useAxiosFetch();
    const [checked, setChecked] = useState([
      { title: "Team members", key: "isTeam", val: false },
      { title: "Blocked", key: "isBlocked", val: false },
      { title: "Oldest to newest", key: "sort", val: false },
      { title: "All", key: "all", val: false },
    ]);
    console.log(repos);
    // const onClick = () =>{
      // e.preventDefault();
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
      <SearchStyle type="text" placeholder='Search' value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}/>
   
   
   
    </>
  )
}

export default Search
