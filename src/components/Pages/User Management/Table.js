import React,{useState} from 'react'
import { useEffect } from 'react';
import {BsThreeDotsVertical}from"react-icons/bs";
import {TableStyle,VeriRed,VeriGreen,Avatar}from "./Style/TableStyle.js"
import axios from "axios";
const baseURL = "https://talents-valley-backend.herokuapp.com/api/team/user/list?offset=0&search=mohamad.osama@gmail.com&limit=10";
const Table = ({data}) => {
    const[par,setPar]=useState("not verified");
  const test = localStorage.getItem("user");
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
   
          
             
  return (
    <TableStyle>
    <table>
    <tr>
    <th></th>
      <th>Name</th>
      <th>Email</th>
      <th>Balance</th>
      <th></th>
      <th>Status</th>
      <th></th>
    </tr>
    
        
    {post.map((val,_id) =>(
      <tr key={val._id}>
      <td>
    <Avatar>{val.firstName.substring(0, 1)}</Avatar> 
 </td>
       <td>{val.firstName}{val.lastName}</td>
       <td>{val.email}</td>
       <td>{val.balance}</td>
       <td></td>
       <td>{val.status? <VeriRed style={{color:par?"":"green"}}>Not verified</VeriRed>:<VeriGreen >Verified</VeriGreen>}</td>
       <td></td>
   </tr>
    ))
    }
         

   

    

  </table>
    </TableStyle>
  )
}

export default Table;
//   <Avatar name={val.name} maxInitials={1} style={{with:"40px",height:"40px",fontSize:"30px"}}/> 
 // 