import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/sidebar';
import './fullpost.css';
import Navbar from '../Navbar/navbar';
import { useLocation, Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import About from '../About/about';
import config from '../config.json';

function Fullpost() {

  const [post, setpost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async() =>{
      const response = await axios.get(config.API_URL+"/posts/"+path);
      setpost(response.data);
    }
    getPost();
  },[path]);

  return (
    <><Navbar/>
<Container>
    <Row>
    <Col >
    <img className='fullpostImg' src={post.postPic} 
    alt="" 
    onError={event => {
      event.target.src = "https://imageio.forbes.com/specials-images/imageserve/62b9d358b54b5849577a1f0b/Abstract-blockchain-background/960x0.jpg?format=jpg&width=960"
      event.onerror = null
    }} />
    <ul className='editdelete'>
        <Link to={`/edit/${post._id}`}><li className='edit'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        </li></Link>
    </ul>
    <h1 className='fullpostTitle'>{post.title}</h1>
    <p className='author'>Author: {post.author}</p>
    <div className='timeCreated'>{new Date(post.createdAt).toDateString()}</div>
    <div className='fullpostParagraph' dangerouslySetInnerHTML={{__html:post.desc}}></div>
    </Col>
    <Col xs lg = '3'>
    <Sidebar/>
    </Col>
    </Row>
</Container>
<br />
<br />
<About/>
</>
  )
}
export default Fullpost;