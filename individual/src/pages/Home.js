
import girl from "../componentes/img/landing-page-girl.png";
import Button from 'react-bootstrap/Button';


function Home () {
   return(
   <div style={{backgroundColor: "#2F303A"}} className="d-flex justify-content-evenly"> 
        <img src={girl} width={400}/>
        <div style={{color: "white"}} className="feel">
            <h1>Feel The Music</h1>
            <p>Stream over 20 thousand songs with one<br/>click</p>
            <Button variant="primary">Join now</Button>{' '}
        </div>
   </div>
   )
};

export default Home;