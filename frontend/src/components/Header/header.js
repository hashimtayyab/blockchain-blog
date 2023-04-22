import {Card} from 'react-bootstrap';  
import React from 'react';
import './header.css';
import Navbar from '../Navbar/navbar';
import bitcoinImg from '../../Images/bitcoinImg.jpg';

function App() {  
  return ( 
    <> 
    {/* <Container> */}
    <Card className=" text-white">
      <Card.Img
      className='headerImg'
      src={bitcoinImg}
        alt="Card image"
      />
      <Card.ImgOverlay className='headerItems'>
      <Navbar/>
        <Card.Title className='headerTitle'>Abstracting The Web3 and Blockchain</Card.Title>
        <hr       style={{
          marginLeft:'auto',
          marginRight:'auto',
          color:'white',
          background:'white',
          justifyContent:'center',
          display:'flex',
          height: '3px',
          width: '400px',
        }} />
        <Card.Text className='headerText'>
        Welcome to 'Blockchain Abstracted', a blog dedicated to exploring the complex world of blockchain technology and making 
        it accessible to a wider audience.
        </Card.Text>
      </Card.ImgOverlay>
    </Card> 
    </>
  );  
}  
export default App;  