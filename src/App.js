import React from 'react';
import NavBar from './components/navbar/navbar.component';
import './App.scss';
import profilePic from './assets/newportpic.jpg';
import HamburgerNav from './components/hamburger-nav/hamburger-nav.component';
import ProjectCard from './components/project/project.component';

function App() {
  return (
    <div className='App'>
      <div className='md-above-nav d-none d-md-flex'>
      <NavBar />
      </div>
      <div className='hamburger-nav-below-md d-md-none'>
      <HamburgerNav />
      </div>
      <div className="container-fluid App-container">
        <div className='row App-container1-row1'>
          <div className='col-12 App-container1-row1-col1'>
              <h1 className='App-container1-row1-col1-title'>
                  <span className='app-title-span'> SHANE PARKERSON </span>
              </h1>
              <p className='App-container1-row1-col1-subtitle'>
                  Software Developer  |  Engineer  | Project Manager
              </p>
              <h5 className='App-container1-row1-col1-credentials'>BSEE | PMP</h5>
          </div>
        </div>
        <div className='row App-container1-row2' id='aboutme'>
            <div className='col-12 App-container1-header'><span className='header-title-span'> ABOUT ME</span></div>
            <div className='col-7 d-block mx-auto App-container1-row2-col1'>
            <img src={profilePic} className="img-fluid mx-auto d-block profilepic" alt="" />
            </div>
            <div className='col-12 d-flex mx-auto App-container1-row2-col2'>
              <p className='profile-content d-none d-md-block'>
                    Accomplished Technology professional with a broad range of experience across software development, 
                <br />wireless engineering, data analytics, project and team management.  I've spent a good deal
                <br /> of my career leading wireless engineering teams in building out cellular networks for
                <br />companies such as Nextel, Sprint and most recently SI Wireless.
                <br />
                <br />I have found a passion in web development and have shifted course to pursue the career  
                <br />full time.  When I am not coding, I enjoy time with my family, hiking, working out and can almost always be found
                <br /> on the baseball field.  Go Cards!
              </p>
              <p className='profile-content d-block d-md-none'>
                    Accomplished Technology professional with a broad range of experience across software development, 
                    wireless engineering, 
                    <br />data analytics, project and team management.  
                    <br /> 
                    <br />I've spent a good deal of my career leading wireless engineering teams in building out cellular networks for
                    companies such as Nextel, Sprint and most recently SI Wireless.
                    <br />
                    <br />I have found a passion in web development and have shifted course to pursue the career full time.  When I am  
                    <br />not coding, I enjoy time with my family, hiking, working out and can almost always 
                    <br />be found on the baseball field.  Go Cards!
              </p>
            </div>
        </div>
        <div className='row App-container1-row3' id='portfolio'>
          <div className='col-12 App-container1-header'><span className='header-title-span'> PORTFOLIO </span></div>
          <div className='col-12 App-container1-row3-col1'>
            <ProjectCard />
          </div>
            
        </div>
        <div className='row App-container1-row4' id='contact'>
        <div className='col-12 App-container1-header'><span className='header-title-span'> CONTACT </span></div>
          <div className='col-12 App-container1-row4-col1'>
            <h1 className='contact-title'>Let's Work Together!!!</h1>
            <a className='email-mobile d-md-none' href="mailto:shaneaparkerson@icloud.com" style={{color: 'whitesmoke', textDecoration: 'underline', fontSize: '10px'}}><i className="far fa-envelope" ></i>shaneAparkerson@icloud.com</a>
            <span className='emailspan d-none d-md-flex'><i className="far fa-envelope"></i><a className='email-mobile' href="mailto:shaneaparkerson@icloud.com" style={{color: 'whitesmoke', textDecoration: 'underline', fontSize: '18px'}}>shaneAparkerson@icloud.com</a></span>
            <div className='contact-links d-md-none'>
                <a className='email-link' target={"_blank"}  href='https://www.linkedin.com/in/shaneparkerson/'> <i className="fab fa-linkedin-in fa-lg"></i> </a>
                <a target={"_blank"}  href='https://github.com/SoftDev-2019'><i className="fab fa-github fa-lg"></i></a>  
            </div>
            <div className='contact-links d-none d-md-flex'>
                <a className='email-link' target={"_blank"}  href='https://www.linkedin.com/in/shaneparkerson/'> <i className="fab fa-linkedin-in fa-2x"></i> </a>
                <a target={"_blank"}  href='https://github.com/SoftDev-2019'><i className="fab fa-github fa-2x"></i></a>  
            </div>
          </div>
        </div>
    </div>
  </div>
    
  );
}

export default App;
