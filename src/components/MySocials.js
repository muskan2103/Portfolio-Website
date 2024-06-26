import React from 'react';
import {FaWindowMinimize,FaRegWindowRestore,FaTimes,FaArrowRight,FaArrowLeft} from 'react-icons/fa'; 
import './Mycomp.css';

const MySocials = ({ onClose }) => {
  return (
    <div id="window">
            <header id="header">
                <div style={{display:'flex',justifyContent:'center',alignitems: 'center',gap:'4px'}}>
                <img id="Mycompheader" src="/images/MySocials.png" alt="" style={{paddingLeft:'2px',height:'20px',width:'20px'}}/>
                <span>My Socials</span>
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
                    <div id="box"></div>C:\Portfolio\Muskan\Desktop\My Socials
                    </div>
                    <img id="go" src="/images/forward-button.png" alt=""></img>
                </div>
            </div>
            <div id="interface">
            <div id="sidepanel"></div>
            <div id="socials">
                <div className="content">
                <a href="https://www.linkedin.com/in/muskan21/">
                <img className="icon" src="/images/linkedin.png" alt="linkedin.png"/>
                <span classname="label">Linkedin</span>
                </a>
                </div>

                <div className="content">
                <a href="https://www.linkedin.com/in/muskan21/">
                <img className="icon" src="/images/github.png" alt="github.png"/>
                <span classname="label">Github</span>
                </a>
                </div>

                <div className="content">
                <a href="https://www.linkedin.com/in/muskan21/">
                <img className="icon" src="/images/cf.png" alt="codeforces.png"/>
                <span classname="label">CodeForces</span>
                </a>
                </div>

                <div className="content" id="leetcode">
                <a href="https://www.linkedin.com/in/muskan21/">
                <img className="icon" src="/images/leetcode.png" alt="leetcode.png"/>
                <span classname="label">Leetcode</span>
                </a>
                </div>
            </div>
            </div>
        </div>
  );
};

export default MySocials;