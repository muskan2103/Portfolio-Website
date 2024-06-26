import React from 'react';
import {FaWindowMinimize,FaRegWindowRestore,FaTimes,FaArrowRight,FaArrowLeft} from 'react-icons/fa'; 
import './Mycomp.css';

const MyIntro = ({ onClose }) => {
  return (
    <div id="window">
            <header id="header">
                <div style={{display:'flex',justifyContent:'center',alignitems: 'center',gap:'4px'}}>
                <img id="Mycompheader" src="/images/MyIntro.png" alt="" style={{paddingLeft:'2px',height:'20px',width:'20px'}}/>
                <span>My Introduction</span>
                </div>
                <div id="buttons">
                <button id="mini" className="headerbuttons"><FaWindowMinimize/></button>
                <button id="max" class="headerbuttons"><FaRegWindowRestore/></button>
                <button id="close" class="headerbuttons" onClick={onClose}>✖</button>
                </div>
            </header>
            <div id="textintro">
            <p1 id="introp">
              Welcome to my Resume Portfolio!<br></br>
              As a pre - final undergraduate student at Indian Institute of Technology enrolled in B. Tech course of Biotechnology Engineering
              and M. Tech course in Financial Engineering, I am excited to embark upon my journey as a developer!<br></br>
              <br></br>
              Thankyou for visiting my portfolio! And I look forward to connecting with you!<br></br>
              Double-click an icon to dive deeper into my journey till yet. <br></br>
              <br></br>
              <em>Powered by the timeless charm of Windows XP</em>
            </p1>
            </div>
        </div>
  );
};

export default MyIntro;