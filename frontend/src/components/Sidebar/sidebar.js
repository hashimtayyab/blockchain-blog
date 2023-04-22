import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <div className='sidebarTitle'>Web3 Abstracted</div>
            <img className='bitcoinPhoto' src="https://images.moneycontrol.com/static-mcnews/2022/09/Cryptocurrency-5.png" alt="" />
            <p className='sidebarText'>Welcome to our blockchain blog! Here you'll find the latest news, updates,
             and insights on everything related to blockchain technology, cryptocurrency, and decentralized applications.
              Our team of experts are dedicated to providing you with accurate and timely information to 
            help you stay up-to-date in this rapidly-evolving industry.</p>
        </div>
    </div>
  )
}

export default Sidebar