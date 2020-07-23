import React, { useState,useEffect } from "react";
import { Container } from "reactstrap";
import "./user-profile.css";
import axios from "axios";
import { TabPane, Row, Col ,Button} from "reactstrap";
import { Table } from "reactstrap";
import NavbarLoggedIn from "../nav-bar-loggedin/nav-bar-loggedin";

function UserProfile() {
  
  
  const [users,setUsers] = useState([])

  useEffect(()=>{
   
  axios.get('http://localhost:7000/api/users/')
    .then(res =>{
  
    console.log(res.data.length);
    console.log(res.data)

   
    setUsers(res.data)
    
      })
    .catch(err => {
      console.log(err)
    })
      
  
  },[])

  
  

  return (
    <div >
    <NavbarLoggedIn />
    
    
      <Container>
      
      
      <Row>
      <Col sm="2"></Col>
      <Col sm="8">
          
          <Table className="usertable">
              <thead>
                  <tr>
                  <th>Username</th>
                  <th>Location</th>
                  <th>Phone No</th>
                  <th>Email Id</th>
                  <th>Net Profile Score</th>
                  
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td className="td-1">
                    {users.map( user =>(
                      <li  key = {user.id}>{user.username}</li>))}
                    </td> 
                      
                    <td className="td-1">
                    {users.map( user =>(
                      <li  key = {user.id}>{user.location}</li>))}
                    </td>
                    <td className="td-1">
                    {users.map( user =>(
                      <li  key = {user.id}>{user.phone}</li>))}
                    </td> 
                      
                      <td className="td-1">
                    {users.map( user =>(
                      <li  key = {user.id}>{user.email}</li>))}
                      </td> 

                      <td className="td-1"></td>
                  </tr>
                     
              </tbody>
          </Table>
          
      </Col>
      <Col sm="2"></Col>
      </Row>
  
    </Container>
    </div>
    
  );
}

export default UserProfile;
