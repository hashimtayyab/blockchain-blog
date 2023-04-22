import React from 'react';
import './create.css';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import { Button } from 'react-bootstrap';
import config from '../config.json';

function Create() {
  const [postImage, setPostImage] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postDesc, setPostDesc] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [login, setLogin] = useState(false);
  const createPost = async () => {
    await axios.post('posts/create/', {      
      postPic: postImage,
      author: postAuthor,  
      title: postTitle,
      desc: postDesc,
    });
   }

   const fetchCredentials = async () => {
    const response = await axios.post(config.API_URL+'/auth/login', {
      username: adminUsername,
      password: adminPassword,
    });
    if(response.status === 200){
      setLogin(true);
    }
    else{console.log('Not valid')}
   }

  return (
    <>
     { (login) ?
   <div className='write'>
        <form className='writeForm'>
          <h2>Add an article</h2>
            <div>
              <div>Add image URL(optional)</div>
            <input type="text" 
            id='fileInput'
            value={postImage}
            onChange={e => setPostImage(e.target.value)}/>
            </div>
            <div>
              <div>Title</div>
            <input type="text" 
            id='titleInput'
            placeholder='title'
            value={postTitle}
            onChange={ e => setPostTitle(e.target.value)}
            />
            </div>
            <div>
              <div>Author</div>
            <input type="text" 
            id='authorInput'
            placeholder='author'
            value={postAuthor}
            onChange={ e => setPostAuthor(e.target.value)}
            />
            </div>
            <div>
              <div>Description</div>
              
                <textarea className='writetext' 
                type="textbox" 
                placeholder='description'
                value={postDesc}
                onChange={e => setPostDesc(e.target.value)}
                />
            </div>

            <div>
            <button  onClick={createPost} >Publish</button>

            </div>
        </form>
    </div>
     :
     <div>
      <Navbar/>
    <div className="login">
        <div className="loginDiv">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" 
        type="text" 
        placeholder="Enter your email..." 
        value={adminUsername}
        onChange={e => setAdminUsername(e.target.value)}
        />
        <label>Password</label>
        <input className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        autoComplete='off'
        value={adminPassword}
        onChange={e => setAdminPassword(e.target.value)}
        />
        <Button onClick={fetchCredentials} variant="success">Login</Button>
      </form>
      </div>
    </div>
    </div>
     } 
    </>
  )
}

export default Create;