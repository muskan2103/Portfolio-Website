import React, { useState, useEffect } from 'react';
import './Desktop.css';
import MyComputer from './Mycomp';
import MyProjects from './MyProjects';
import MySocials from './MySocials';
import MyIntro from './Introduction';
import MySkills from './MySkills';


const Desktop = () => {
  const [isMyIntroOpen, setMyIntroOpen] = useState(false);
  const [isMyComputerOpen, setMyComputerOpen] = useState(false);
  const [isMySkillsOpen, setMySkillsOpen] = useState(false);
  const [isMyProjectsOpen, setMyProjectsOpen] = useState(false);
  const [isMySocialsOpen, setMySocialsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');


  useEffect(() => {
    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }

    setCurrentTime(getCurrentTime());
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  const handleMyIntroButtonClick = () => {
    setMyIntroOpen(true);
  };

  const handleMyComputerButtonClick = () => {
    setMyComputerOpen(true);
  };

  const handleMySkillsButtonClick = () => {
    setMySkillsOpen(true);
  };

  const handleMyProjectsButtonClick = () => {
    setMyProjectsOpen(true);
  };

  const handleMySocialsButtonClick = () => {
    setMySocialsOpen(true);
  };

  const handleClose = () => {
    setMyIntroOpen(false);
    setMyComputerOpen(false);
    setMySkillsOpen(false);
    setMyProjectsOpen(false); // Close MyComputer if open
    setMySocialsOpen(false);
  };

  return (
    <div>
      <div className="icon-button" onClick={handleMyIntroButtonClick}>
      <img className="icon-image" src="/images/MyIntro.png" alt="MyIntroIcon.png"/>
      <span className="icon-label">My Introduction</span>
      </div>
      {isMyIntroOpen && <MyIntro onClose={handleClose} />}

    <div className="icon-button" onClick={handleMyComputerButtonClick}>
      <img className="icon-image" src="/images/MyComp.png" alt="MyComputerIcon.png"/>
      <span className="icon-label">My Computer</span>
    </div>
      {isMyComputerOpen && <MyComputer onClose={handleClose} />}

    <div className="icon-button" onClick={handleMySkillsButtonClick}>
      <img className="icon-image" src="/images/MySkills.png" alt="MySkillsIcon.png"/>
      <span className="icon-label">My Skills</span>
    </div>
      {isMySkillsOpen && <MySkills onClose={handleClose} />}

    <div className="icon-button" onClick={handleMyProjectsButtonClick}>
      <img className="icon-image" src="/images/MyProjects.png" alt="MyProjectsIcon.png"/>
      <span className="icon-label">My Projects</span>
    </div>
      {isMyProjectsOpen && <MyProjects onClose={handleClose} />}

    <div className="icon-button" onClick={handleMySocialsButtonClick}>
      <img className="icon-image" src="/images/MySocials.png" alt="MySocialsIcon.png"/>
      <span className="icon-label">My Socials</span>
    </div>
      {isMySocialsOpen && <MySocials onClose={handleClose} />}

      <div className="status_bar">
        <button id="startbutton">
          <img src="/images/windows.png" alt="Windows icon" />
          Start
        </button>
        <div className="time-display">
          <img style={{paddingRight:'10px',height:'20px',width:'20px'}} src="/images/info.png" alt="infoIcon.png"/>
          {currentTime}</div>
        </div>
    </div>
  );
};

export default Desktop;
