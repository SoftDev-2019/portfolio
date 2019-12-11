import React from 'react';
import NavBar from './components/navbar/navbar.component';
import './App.scss';
import ReactSVG from './assets/react.svg';
import ReduxSVG from './assets/redux.svg'
import FirebaseSVG from './assets/firebase.svg';
import SassSVG from './assets/sass.svg';
import JSSVG from './assets/javascript.svg';
import CSS3SVG from './assets/css3.svg';
import HTML5SVG from './assets/html5.svg';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className="container-fluid App-container">
        <div className='row App-container1-row1'>
          <div className='col-12 App-container1-row1-col1'>
              <h1 className='App-container1-row1-col1-title'>
                  <span className='app-title-span'> SHANE PARKERSON </span>
              </h1>
              <br />
              <p className='App-container1-row1-col1-subtitle'>
                  Software Developer
              </p>
          </div>
        </div>
        <div className='row App-container1-row2'>
            <div className='col-12 App-container1-header'>ABOUT ME</div>
            <div className='col-12 App-container1-row2-col1'>
              <div className='col-5 App-container1-row2-col1-fill'></div>
              <div className='col-2 App-container1-row2-col1-image'></div>
              <div className='col-5 App-container1-row2-col1-fill'></div>
              <div className='col-4 App-container1-row2-col1-fill-content'></div>
              <div className='col-4 App-container1-row2-col1-content'>
                <p className='App-container1-row2-col2-text'>
                  Passionate Technology advocate with a broad range of experience across software development, wireless engineering, data analytics, project and team management.
                  <br />
                  <br />
                  Strong technical and analytical skills rooted in substantial engineering training and education, holding a BSEE and Project Management Professional(PMP) Certification. Self-taught developer who thrives on building productive, efficent code.
                  <br />
                  <br />
                  Posses C-level Professional abilities focused on collaboration, communication, self-motivation, loyalty, critical-thinking and problem solving to deliver client and team success. 
                </p>
              </div>
            </div>
        </div>
        <div className='row App-container1-row3'>
          <div className='col-12 App-container1-header'>PORTFOLIO</div>
          <div className='col-6 App-container1-row3-col1'>
            <a className='project1-link' target={"_blank"} href='https://franklingeneralsdb.web.app/' alt=''><span></span></a>
            <h5 className='project1-title'>Franklin Generals Baseball Team</h5>
            <div className='techimage-container'>
              <img className='techimage' src={ReactSVG} alt='' />
              <img className='techimage' src={ReduxSVG} alt=''/>
              <img className='techimage' src={FirebaseSVG} alt=''/>
              <img className='techimage' src={JSSVG} alt=''/>
              <img className='techimage' src={SassSVG} alt=''/>
              <img className='techimage' src={CSS3SVG} alt=''/>
              <img className='techimage' src={HTML5SVG} alt=''/>
            </div>
          </div>
          <div className='col-6 App-container1-row3-col2'>
            <a className='project2-link' target={"_blank"} href='https://softdev-2019-crowndb.web.app/' alt=''><span></span></a>
            <h5 className='project1-title'>Crown Clothing E-Commerce</h5>
            <div className='techimage-container'>
              <img className='techimage' src={ReactSVG} alt='' />
              <img className='techimage' src={ReduxSVG} alt=''/>
              <img className='techimage' src={FirebaseSVG} alt=''/>
              <img className='techimage' src={JSSVG} alt=''/>
              <img className='techimage' src={SassSVG} alt=''/>
              <img className='techimage' src={CSS3SVG} alt=''/>
              <img className='techimage' src={HTML5SVG} alt=''/>
            </div>
          </div>
        </div>
        <div className='row App-container1-row4'>
        <div className='col-12 App-container1-header'>CONTACT</div>
          <div className='col-12 App-container1-row4-col1'>
            <h1 className='contact-title'>Let's Work Together!!!</h1>
            <a href="mailto:shaneaparkerson@icloud.com" style={{color: 'black', textDecoration: 'underline'}}><i className="far fa-envelope"></i>shaneAparkerson@icloud.com</a>
            <div className='contact-links'>
                <a target={"_blank"}  href='https://www.linkedin.com/in/shaneparkerson/'> <i className="fab fa-linkedin-in fa-2x"></i> </a>
                <a target={"_blank"}  href='https://github.com/SoftDev-2019'><i className="fab fa-github fa-2x"></i></a>  
             
            </div>
          </div>
        </div>
    </div>
  </div>
    
  );
}

export default App;
