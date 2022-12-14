import React from 'react'
import Footer from '../../Footer/Footer.js';
import NavBar from '../../NavBar/NavBar.js';
import LinksRout from './LinkRout.js';
import { SecContainer,HeadUserMang}from"./Style/UserManagementStyle.js"
import Search from './Search.js'

const UserManagement = () => {
  return (
    <>
    <NavBar/>
    <SecContainer>
    <section>
    <LinksRout/>
     </section>
     <section>
    <HeadUserMang> UserManagement</HeadUserMang>
    <Search/>
    </section>
    </SecContainer>
    </>
  )
}

export default UserManagement;
// 