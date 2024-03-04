import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div style={{ height: "320px" }} className="container-fluid bg-dark mt-5 ">
      <div className="footer-content d-flex justify-content-between">
        <div style={{ width: "400px" }} className="media">
        <div className="d-flex mt-3">
            <h5 className="mt-2 fs-2 text-light" >
              Dream Home </h5><img style={{width:'65px',height:'60px',marginBottom:'10px'}} src={logo}></img>
           
        </div>
          <p style={{fontStyle:'italic ms-2'}} className="text-light mt-2 pt-3 " >
        
 website provides a platform for users to browse, buy, sell, or rent properties such as houses, apartments, and commercial spaces. Users can search for properties based on location, price range, size, and other criteria, making it easier to find their ideal property.
          </p>
          <p>Code Licensed RecipeBook, docs CC by 3.0</p>
          <p>Currently v3.1.2.</p>
        </div>
        <div className="links d-flex flex-column mt-3 p-2 ">
          <h5 style={{color:'white'}}>LINKS</h5>
          <Link to={"/"} style={{ textDecoration: "none", color: "white",fontWeight:'bold' }}>
         <p className="mt-2">   Home</p>
          </Link>
          <Link to={"/Sell"} style={{ textDecoration: "none", color: "white",fontWeight:'bold' }}>
        <p>    Sell</p>
          </Link>
          <Link to={"/Buy"} style={{ textDecoration: "none", color: "white",fontWeight:'bold' }}>
         <p>   Buy</p>
          </Link>
          <Link to={"/Favourites"} style={{ textDecoration: "none", color: "white",fontWeight:'bold' }}>
         <p className="pe-3"> Favourites</p>
          </Link>
        </div>
        <div style={{fontWeight:'bold'}} className="contact d-flex text-white mb-3 mt-3 flex-column">
          <h5>CONTACT US</h5>
          <div className="d-flex mt-3">
            <input
              type="text"
              className="form-control me-1"
              placeholder="Email Id Please"
            />
            <button className="btn btn-info">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="https://twitter.com/?lang=en">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;