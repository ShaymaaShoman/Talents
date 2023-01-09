import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

import { TableStyle, VeriRed, VeriGreen, Avatar ,IconStyle,BoxFilter,Setting} from "./Style/TableStyle.js";
import useAxiosFetch from "../../../hook/useAxiosFetch.js";
import {SearchStyle} from "./Style/SearchStyle.js";
import {CiSearch} from "react-icons/ci";
const Table = () => {
  const [par, setPar] = useState("not verified");
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [showSelect, setShowSelect] = useState(false);
    const [showOption, setShowOption] = useState(false);
  const [checked, setChecked] = useState(false);
  const { fetchError, isLoading, repos } = useAxiosFetch(
    "https://talents-valley-backend.herokuapp.com/api/team/user/list"
  );
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  function handleOption1Change(event) {
    setOption1(event.target.checked);
  }

  function handleOption2Change(event) {
    setOption2(event.target.checked);
  }

  function handleOption3Change(event) {
    setOption3(event.target.checked);
  }
  function handleOption4Change(event) {
    setOption4(event.target.checked);
  }
  useEffect(() => {
    setFilteredUsers(
      repos.filter(item => item.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, repos]);
  // const {data,loading,error}=useFetch("https://talents-valley-backend.herokuapp.com/api/team/user/list");
 if (!repos) return null;
  if (fetchError) return `Error: ${fetchError.message}`;
  if (isLoading) return "Loading...";
  

  const onClick = () => setShowResults(false);
   const optionTest = () => setShowSelect(!showSelect);
   const optionOption = () => setShowOption(!showOption);
  return (
    <>
    {showResults ?
      <IconStyle ><CiSearch /> </IconStyle>:""}
  
    <Setting><TbAdjustmentsHorizontal style={{cursor:" pointer"}} onClick={optionTest}/></Setting>
    {showSelect ?  <BoxFilter>
      <form style={{cursor:" pointer"}}>
        <label style={{cursor:" pointer"}}>
          <input
            type="checkbox"
            checked={option1}
            onChange={handleOption1Change}
          />
           Team members
        </label>
        <br />
        <label style={{cursor:" pointer"}}>
          <input
            type="checkbox"
            checked={option2}
            onChange={handleOption2Change}
          />
          Blocked
        </label>
        <br />
        <label style={{cursor:" pointer"}}>
          <input
            type="checkbox"
            checked={option3}
            onChange={handleOption3Change}
          />
          Oldest to newest
        </label>
        <br />
        <label style={{cursor:" pointer"}}>
          <input
            type="checkbox"
            checked={option4}
            onChange={handleOption4Change}
          />
          All
        </label>
      </form>
    </BoxFilter>
    :""}
    <SearchStyle  onClick={onClick} type="text" placeholder='Search' value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}/>
    <TableStyle>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {repos.map((item) => {
            return (
              <tr key={item._id}>
                <Avatar>{item.firstName.substring(0, 1)}</Avatar>
                <td>
                  {item.firstName}
                  {item.lastName}
                </td>
                  <td>{item.email}</td>
                <td>{item.balance}</td>
                <td>
                  {item.verifiedAddress.status && item.verifiedId.status ? (
                    <VeriRed style={{ color: par ? "" : "green" }}>
                      Not verified
                    </VeriRed>
                  ) : (
                    <VeriGreen>Verified</VeriGreen>
                  )}
                </td>
                <td>
                <SlOptionsVertical  style={{cursor:" pointer"}} onClick={optionOption}/>
              </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
        
    </TableStyle>
    {showOption ?<BoxFilter>
      <span>Set as User</span>
      <span>Block</span>
      <span>Delete</span>
      </BoxFilter>:""}
 </>
  );
};

export default Table;
//
//   <Avatar name={val.name} maxInitials={1} style={{with:"40px",height:"40px",fontSize:"30px"}}/>

// {filteredUsers.map(user => (
//   <tr key={user.id}>
//     <td>{user.email}</td>
//   </tr>