import React from 'react'
import Footer from '../../Footer/Footer.js';
import NavBar from '../../NavBar/NavBar.js';
import LinksRo from './LinkRo.js';
import { SecContainer,HeadUserMang}from"./Style/UserManagementStyle.js"
import Search from './Search.js'
import Table from './Table.js';
const UserManagement = () => {
  return (
    <>
    <NavBar/>
    <SecContainer>
    <section>
    <LinksRo/>
     </section>
     <section>
    <HeadUserMang> UserManagement</HeadUserMang>
     <Table />
    </section>
    </SecContainer>
    </>
  )
}

export default UserManagement;
// 