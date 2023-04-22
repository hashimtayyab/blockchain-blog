import React from 'react'
import {Row, Col} from 'react-bootstrap';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const scrollToBottom = () =>{ 
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }; 
  return (
    <>
        <Row className='mainRow'>
            <Col className='mylogo'>
            <a className="logo" href="/">Blockchain Abstracted</a>
            </Col>
            <Col xs lg='3' className='navoptions'>
            <a className="home" href="/">Home</a>
            <div className="about" onClick={scrollToBottom}>About</div>
            
            {/* <a className="contact" href="/">Have a question?</a> */}
           <Link to={"https://github.com/hashimtayyab"}>
           <span className="portfolio" href="/">Portfolio   </span>
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            </Link>
            </Col>
        </Row>
        <hr/>
        </>
  )
}

export default Navbar;