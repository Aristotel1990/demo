import React from 'react'
import { useState } from 'react';
import '../styles/Sidebar.css';
import Dashboard from './Dashboard';
import HomePage from './HomePage';
import { useStateValue } from "../reducers/StateProvider";
import AddNewCustomer from './AddNewCustomer';


function Sidebar() {
  const [{isLogin}, dispatch] = useStateValue();

  const [data, setData] = useState("homepage")
  


    return (
      <> 
      <div className="sidebar-container">
      <div className="sidebar-logo">
        Customers Menu
      </div>
      <ul className="sidebar-navigation">
        <li className="header">Navigation</li>
        <li>
          <a onClick={()=>setData("homepage")} >
            <i className="fa fa-home" aria-hidden="true" ></i> Homepage
          </a>
        </li>
        <li>
          <a  onClick={()=>setData("dashboard")}>
            <i className="fa fa-tachometer" aria-hidden="true" ></i> Dashboard 
          </a>
        </li>
        <li className="header">Another Menu</li>
        <li>
          <a  onClick={()=>setData("addnew")}>
            <i className="fa fa-users" aria-hidden="true"></i> Add Customers
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-cog" aria-hidden="true"></i> Settings
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-info-circle" aria-hidden="true"></i> Information
          </a>
        </li>
      </ul>
    </div>
    
    <div className="content-container">
    
      <div className="container-fluid">
    
        {data==="homepage" ?<HomePage/> : data==="dashboard" ? <Dashboard/>:  data==="addnew" ? <AddNewCustomer/>:""}  
        </div>
    </div>
      </>
      
     )
}

export default Sidebar
