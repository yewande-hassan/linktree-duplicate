import { Link } from 'react-router-dom';
import Avatar from '../src/Component/images/Avatar.svg';
import Avatarsharebutton from "../src/Component/images/Avatarsharebutton.svg"
import AvatarsharebuttonWeb from "../src/Component/images/AvatarsharebuttonWeb.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <img id="profile_img" src={Avatar} alt="Avatar"/>
      <img id="Avatarsharebutton" src={Avatarsharebutton} alt="Avatarsharebutton"/>
      <img id="AvatarsharebuttonWeb" src={AvatarsharebuttonWeb} alt="AvatarsharebuttonWeb"/>
      <p className='name'>Annette Black</p>
      <div className='cards'>
      <a href="https://twitter.com/WendyCode">
      <button className='btn'>Twitter Link</button>
      </a>
      <a  id="btn__zuri" href="https://training.zuri.team/"> 
        <button className='btn'>Zuri Team</button>
        </a>
        <a id="books" href="http://books.zuri.team/"> 
        <button className='btn'>Zuri Books</button>
        </a>
        <a id="book__python" href="http://books.zuri.team/"> 
        <button className='btn'>Python Books</button>
        </a>
        <a id="book__python" href="https://background.zuri.team/"> 
        <button className='btn'>Background Check for Coders</button>
        </a>
        <a id="book__design" href="https://books.zuri.team/design-rules"> 
        <button className='btn'>Design Books</button>
        </a>
      </div>
    </div>
  );
}

export default App;
