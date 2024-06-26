import React from 'react';
import {FaWindowMinimize,FaRegWindowRestore,FaTimes,FaArrowRight,FaArrowLeft} from 'react-icons/fa'; 
import './Mycomp.css';

const MyComputer = ({ onClose }) => {
  return (
    <div id="window">
            <header id="header">
                <div style={{display:'flex',justifyContent:'center',alignitems: 'center',gap:'4px'}}>
                <img id="Mycompheader" src="/images/MyComp.png" alt="" style={{paddingLeft:'2px',height:'20px',width:'20px'}}/>
                <span>My Computer</span>
                </div>
                <div id="buttons">
                <button id="mini" className="headerbuttons"><FaWindowMinimize/></button>
                <button id="max" class="headerbuttons"><FaRegWindowRestore/></button>
                <button id="close" class="headerbuttons" onClick={onClose}>✖</button>
                </div>
            </header>
            <div id="greyBar">
                <div id="h1">
                    <img class="navigatebuttonsback" src="/images/back-button.png" alt=""></img>
                    <img class="navigatebuttonsforward" src="/images/forward-button.png" alt=""></img>
                    <span id="search">Search</span>
                    <img class="navigatebuttonsback" src="/images/search.png" alt=""></img>
                </div>
                <div id="h2">
                    Address
                    <div id="address">
                    <div id="box"></div>C:\Portfolio\Muskan\Desktop\MyComputer
                    </div>
                    <img id="go" src="/images/forward-button.png" alt=""></img>
                </div>
            </div>
            <div id="sidepanel"></div>
        </div>
  );
};

export default MyComputer;