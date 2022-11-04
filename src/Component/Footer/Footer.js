import React from "react";
import logo from "../images/logo.svg"
import I4G from "../images/I4G.svg";
import "./Footer.css"

export default function Footer(){
   return(
    <div className='footer'>
    <img id="logo" src={logo} alt="logo"/>
    <p className="footerText">HNG Internship 9 Frontend Task</p>
    <img id="I4G" src={I4G} alt="I4G"/>
    </div>
   ) 
}