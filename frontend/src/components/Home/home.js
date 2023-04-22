import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/sidebar';
import Posts from '../Posts/posts';
import {Row, Col, Container} from 'react-bootstrap';
import Header from '../Header/header';
import './home.css';
import axios from 'axios';
import About from '../About/about';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async() =>{
     const res =   await axios.get('/posts');
      setPosts(res.data);
    }
    fetchPost();
  },[])
  return (
    <div className='homeImg'>
      <Header/>
    <main className='homePage'>
      <header>
        <Container>
          <Row>
            <Col xs lg= '8'>
                <Posts posts={posts}/>
            </Col>
            <Col xs lg = '3'>
                <Sidebar/>
            </Col>
          </Row>
        </Container>
      </header>      
    </main>
    <About/>
  </div>
  )
}

export default Home;