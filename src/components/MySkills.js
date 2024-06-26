import React from 'react';
import {FaWindowMinimize,FaRegWindowRestore,FaTimes,FaArrowRight,FaArrowLeft} from 'react-icons/fa'; 
import './Mycomp.css';

const MySkills = ({ onClose }) => {
  return (
    <div id="window">
            <header id="header">
                <div style={{display:'flex',justifyContent:'center',alignitems: 'center',gap:'4px'}}>
                <img id="Mycompheader" src="/images/MySkills.png" alt="" style={{paddingLeft:'2px',height:'20px',width:'20px'}}/>
                <span>My Skills</span>
                </div>
                <div id="buttons">
                <button id="mini" className="headerbuttons"><FaWindowMinimize/></button>
                <button id="max" class="headerbuttons"><FaRegWindowRestore/></button>
                <button id="close" class="headerbuttons" onClick={onClose}>✖</button>
                </div>
            </header>
            <br></br>
            <img id="C" src="/images/C.png" alt="" style={{height:'23%',width:'20%'}}/>
            <img id="py" src="/images/python.png" alt="" style={{height:'23%',width:'20%'}}/>
            <img id="sql" src="/images/sql.png" alt="" style={{height:'23%',width:'20%'}}/>
            <img id="html" src="/images/html.png" alt="" style={{height:'23%',width:'20%'}}/>
            <img id="js" src="/images/js.png" alt="" style={{height:'23%',width:'20%'}}/>
            <img id="sap" src="/images/sap.png" alt="" style={{height:'23%',width:'20%'}}/>
            <img id="react" src="/images/react.png" alt="" style={{height:'23%',width:'20%'}}/>
        </div>
  );
};

export default MySkills;