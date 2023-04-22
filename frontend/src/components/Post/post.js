import React from 'react';
import './post.css';
import {Card, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Post({post}) {

  return (
    <>
<Card className='maincard' style={{ width: '57rem', height: '15rem' }}>
  <Row>
    <Col>
    <Link to={`/post/${post._id}`}>
      <Card.Img className='postImg' 
      
      src= {post.postPic} 
      alt= "default img"
      onError={event => {
        event.target.src = "https://imageio.forbes.com/specials-images/imageserve/62b9d358b54b5849577a1f0b/Abstract-blockchain-background/960x0.jpg?format=jpg&width=960"
        event.onerror = null
      }} />
      </Link>
      </Col>
      <Col>
      <Card.Body>
        <Card.Title className='postTitle'>
          <h2>{post.title}</h2>
          </Card.Title>
          <Card.Text className='postingDate'>
            {new Date(post.createdAt).toDateString()}
          </Card.Text>
        <Card.Text className='postText' dangerouslySetInnerHTML={{__html:post.desc}}> 
        </Card.Text>
      </Card.Body>
      </Col>
      </Row>
    </Card> 
    
    <hr style={{
      color:"white",
      width:'100%',
    }}/>
    </> 
  )
}

export default Post