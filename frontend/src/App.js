import './App.css';
import Home from './components/Home/home';
// import Navbar from './components/Navbar/navbar';
import Fullpost from './components/FullPost/fullpost';
import Create from './components/Create/create';
import Login from './components/Login/login';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit/edit';

function App() {
  return (
<div className='App'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/post/:postId' element={<Fullpost/>}/>
    <Route path='/edit/:postId'element={<Edit/>}/>
  </Routes>
</div>
  );
}

export default App;
