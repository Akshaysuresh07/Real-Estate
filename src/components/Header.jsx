import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
   <>
   <Navbar className=' pb-4' bg="dark" data-bs-theme="dark">
   <Container>
     <Navbar.Brand style={{color:'whitesmoke',fontWeight:'bolder', fontFamily:'sans-serif'}} href="#home">Dream Home<img style={{height:'70px',width:'65px'}} src={logo}></img></Navbar.Brand>
     <Nav className="ms-auto me-5 mt-3">
       <Link to={'/'} style={{ textDecoration: "none" }}>  <Nav.Link  style={{color:'whitesmoke ', fontSize:'20px'}} href="#home">Home</Nav.Link></Link>
       <Link to={'/Sell'} style={{ textDecoration: "none" }}><Nav.Link style={{color:'whitesmoke' , fontSize:'20px'}} href="#features">Sell</Nav.Link></Link>
       <Link to={'/Buy'} style={{ textDecoration: "none" }}> <Nav.Link style={{color:'whitesmoke', fontSize:'20px'}} href="#pricing">Buy</Nav.Link></Link>
       <Link to={'/Favourites'} style={{ textDecoration: "none" }}><Nav.Link style={{color:'whitesmoke', fontSize:'20px'}} href="#pricing">Favourite</Nav.Link></Link>
       <Nav.Link style={{color:'whitesmoke', fontSize:'20px'}} href="#pricing">Cart</Nav.Link>
       </Nav>
 
   </Container>
 </Navbar>
   </>
  )
}

export default Header