
import girl from "../img/Group3.png";
import Button from 'react-bootstrap/Button';
import "./Home.css";


function Home () {
   return(
    <div className="home">
        <div style={{backgroundColor: "#2F303A"}} className="d-flex justify-content-evenly"> 
            <img src={girl} className="girl" alt="x"/>
            <div style={{color: "white"}} className="feel" >
                <h1>Feel The Music</h1>
                <p>Stream over 20 thousand songs with one<br/>click</p>
                <Button variant="primary">Join now</Button>{' '}
            </div>
       </div>
    </div>
   )

};

export default Home;