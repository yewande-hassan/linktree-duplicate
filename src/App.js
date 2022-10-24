import { Link } from 'react-router-dom';
import Avatar from '../src/Component/images/Avatar.jpeg';
import Avatarsharebutton from "../src/Component/images/Avatarsharebutton.svg"
import AvatarsharebuttonWeb from "../src/Component/images/AvatarsharebuttonWeb.svg"
import Github from "../src/Component/images/Github.svg"
import slack from "../src/Component/images/slack.svg"
import logo from "../src/Component/images/logo.svg"
import I4G from "../src/Component/images/I4G.svg"
import './App.css';

function App() {
  return (
    <div className="App">
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
      </div>
      <div className='socials'>
      <img id="slack" src={slack} alt="slackIcon"/>
      {/* slack name= Yewande Hassan */}
      <img id="Github" src={Github} alt="GithubIcon"/>
      </div>
      <div className='footer'>
      <img id="logo" src={logo} alt="logo"/>
      <p className="footerText">HNG Internship 9 Frontend Task</p>
      <img id="I4G" src={I4G} alt="I4G"/>
      </div>
    </div>
  );
}

export default App;
