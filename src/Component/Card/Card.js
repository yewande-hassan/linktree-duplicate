import React from "react"
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Avatar from '../images/Avatar.jpeg';
import Avatarsharebutton from "../images/Avatarsharebutton.svg"
import AvatarsharebuttonWeb from "../images/AvatarsharebuttonWeb.svg"
import Github from "../images/Github.svg"
import slack from "../images/slack.svg"

import "./Card.css"
export default function Card (){
    return(
        <div>
        <img id="profile_img" src={Avatar} alt="Avatar"/>
      <img id="Avatarsharebutton" src={Avatarsharebutton} alt="Avatarsharebutton"/>
      <img id="AvatarsharebuttonWeb" src={AvatarsharebuttonWeb} alt="AvatarsharebuttonWeb"/>
      <p className='name'>Yewande Hassan</p>
      <div className='cards'>
      <a href="https://twitter.com/WendyCode">
      <button id="twitter" className='btn'>Twitter Link</button>
      </a>
      <a  id="btn__zuri" href="https://training.zuri.team/"> 
        <button className='btn'>Zuri Team</button>
        </a>
        <a id="books" href="http://books.zuri.team/"> 
        <button className='btn'>Zuri Books</button>
        </a>
        <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=Yewande Hassan"> 
        <button className='btn'>Python Books</button>
        </a>
        <a id="pitch" href="https://background.zuri.team/"> 
        <button className='btn'>Background Check for Coders</button>
        </a>
        <a id="book__design" href="https://books.zuri.team/design-rules"> 
        <button className='btn'>Design Books</button>
        </a>
        <Link id="contact" to="/contact"> 
        <button className='btn'>Contact Me</button>
        </Link>
      </div>
      <div className='socials'>
      <img id="slack" src={slack} alt="slackIcon"/>
      {/* slack name= Yewande Hassan */}
      <img id="Github" src={Github} alt="GithubIcon"/>
      
      </div>
      <Footer/> 
      </div>
    )
}

