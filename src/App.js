import logo from './logo.svg';
import './App.css';
import image from './Images/imageInSrc.png'
import { Button , Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    
 <div>
  <div>
    <h1 className= "title" > Mehdi Khediri </h1>
    <br />
    <div className = "imgs">
    <img src={image} className = "img1" />
    <br />
    <br />
    <br />
    <img src={'/image/imageInPublic.png'} className = "img2" />
    </div>
    <br />
    <br />
    <br />
    <video width={320} height={240} controls className = "img2" >
    <source src={'/GMC.mp4'} />
  </video>
  </div>
  <br />
  <br />
  <br />
  
  </div>


    </div>
  );
}

export default App;
