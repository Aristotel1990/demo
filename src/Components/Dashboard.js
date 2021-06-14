import React from 'react'
import Table from 'react-bootstrap/Table'
import { useStateValue } from "../reducers/StateProvider";

function Dashboard() {
  const [{basket}, dispatch] = useStateValue();

    return (
        <div>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Nr</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>Age</th>
      

    </tr>
  </thead>
  <tbody>
    {basket.map((data)=>
    ( <tr>

      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.surname}</td>
      <td>{data.address}</td>
      <td>{data.age}</td>

    </tr>)
    )}
   
    
  </tbody>
</Table>
        </div>
    )
}

export default Dashboard
