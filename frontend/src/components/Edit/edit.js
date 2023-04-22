import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Navbar from '../Navbar/navbar';
import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import './edit.css';
import config from '../config.json';

function Edit() {

  const [loggenin, setLoggedin] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [post, setpost] = useState({});
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newPostpic, setNewPostpic] = useState('');
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(()=>{
    const getPostFirst= async () => {
        // const response = await axios.get('http://localhost:5000/api/posts/'+path);
        const response = await axios.get(config.API_URL+'/posts/'+path);
        setpost(response.data);
        setNewTitle(response.data.title);
        setNewDesc(response.data.desc);
        setNewPostpic(response.data.postPic);
    }
    getPostFirst();
  },[path]);
    const editPost = async() =>{
        console.log(newTitle);
        await axios.put(config.API_URL+"/posts/"+path, {
            title: newTitle,
            desc: newDesc,
            postPic: newPostpic,
        });
        setLoggedin(false);
        setInputPassword('');
        setInputUsername('');
    }
    const checkPassword = async() =>{
        const passResponse = await axios.post(config.API_URL+'/auth/login', {
            password: inputPassword,
            username: inputUsername,
        })
        if(passResponse.status === 200){
            setLoggedin(true);
        }
        else{
            alert('Wrong Password');
        }
    }


  return (
    <><Navbar/>
    <h1>ON EDIT PAGE</h1>
    { (loggenin) ?
<Container>
    <Row>
    <Col >
    <img className='fullpostImg' src={post.postPic} 
    alt="" 
    onError={event => {
      event.target.src = "https://imageio.forbes.com/specials-images/imageserve/62b9d358b54b5849577a1f0b/Abstract-blockchain-background/960x0.jpg?format=jpg&width=960"
      event.onerror = null
    }} />
    {/* <h1 className='fullpostTitle'>{post.title}</h1> */}
    <input type="text"
    className='postTitleEdit'
    value={newTitle}
    onChange={e => setNewTitle(e.target.value)}
     />
     <br />
     <div     className='postDescEdit'
>
    <textarea id="w3review" name="w3review" rows="20" cols="100" type="textarea"
    value={newDesc}
    onChange={e => setNewDesc(e.target.value)}
     />
     </div>
     <br />
    <input type="text"
    className='postImageEdit'
    value={newPostpic}
    onChange={e => setNewPostpic(e.target.value)}
     />
    <button onClick={editPost}>Change</button>
    </Col>
    <Col xs lg = '3'>
    </Col>
    </Row>

    </Container>
    
    :
    <div>
        <input type="username"
        placeholder='username...'
        value={inputUsername}
        onChange={e => setInputUsername(e.target.value)}
         />
        <input type="password"
        placeholder='password...'
        value={inputPassword}
        onChange={e => setInputPassword(e.target.value)}
         />
         <button onClick={checkPassword}>Confirm</button>
    </div>
}
</>
  )
}
export default Edit;