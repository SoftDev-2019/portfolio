import React, { Component } from 'react'
import './hamburger-nav.styles.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';



class HamburgerNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
        isActive: !prevState.isActive
      }));
    }
    render() {
        
        return (
            <div className='container-fluid hamburgertemp-container'>
               <div className='row hamburgertemp-container-row1'>
                   <div className='col-6 hamburgertemp-container-row1-col2'>
                        <button className='hamburgertemp-button' onClick={this.handleClick}><i className="fas fa-align-justify fa-lg hamburgertemp-icon"></i></button>
                   </div>
               </div>
               { this.state.isActive ? 
                <div className='row hamburgertemp-container-row2'>
                    <div className='col-12 hamburgertemp-container-row2-col1'>
                        <NavLink className="nav-link"  to='/#aboutme' onClick={this.handleClick} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>About<span className="sr-only">(current)</span></NavLink>
                        <a className="nav-link" href='/ShaneParkerson_Resume2020_Website.pdf' download='ShaneParkerson_Resume_2020.pdf'>Resume<span className="sr-only">(current)</span></a>
                        <NavLink className="nav-link" to='/#portfolio' onClick={this.handleClick} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Portfolio<span className="sr-only">(current)</span></NavLink>     
                        <NavLink className="nav-link" onClick={this.handleClick} smooth to='/#contact'>Contact<span className="sr-only">(current)</span></NavLink>   
                    </div>
                </div>
               : '' }
            </div>
        );
    }
}

export default HamburgerNav;


