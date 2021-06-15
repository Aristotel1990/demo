import React, { useState } from 'react'
import { useStateValue } from '../reducers/StateProvider';
import { Link } from 'react-router-dom'
import '../styles/Sidebar.css';
import Dashboard from './Dashboard';
import AddNewCustomer from './AddNewCustomer';
import HomePage from './HomePage';

function Sidebar() {
  const [{isLogin}, dispatch] = useStateValue();

  const [data, setData] = useState("homepage")
  return (
    <div>
      <div id="wrapper" className="toggled">


<div id="sidebar-wrapper">
    <ul className="sidebar-nav">
        <li >
            <Link onClick={()=>setData("homepage")}>
                Dashboard Panel
            </Link>
        </li>
        <li>
            <Link onClick={()=>setData("dashboard")}>List of Customers</Link>
        </li>
        <li>
            <Link  onClick={()=>setData("addnew")}>Add Customer</Link>
        </li>
        <li>
            <Link >Overview</Link>
        </li>
        <li>
            <Link >Events</Link>
        </li>
        <li>
            <Link >About</Link>
        </li>
        <li>
            <Link >Services</Link>
        </li>
        <li>
            <Link >Contact</Link>
        </li>
    </ul>
</div>

<div id="page-content-wrapper">

    <div className="container-fluid">
    {data==="homepage" ? <HomePage/> : data==="dashboard" ? <Dashboard/>:  data==="addnew" ? <AddNewCustomer/>:""}
    </div>
</div>


</div>
    </div>
  )
}

export default Sidebar
