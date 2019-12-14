import React from 'react'
import './navbar.styles.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';



const NavBar = () => (
    <div className='container-fluid navbarlarge-container fixed-top'>
        <div className='row navbarlarge-container-row'>
            <div className='col-12 navbarlarge-container-row-right-col'>
                <NavLink className="nav-link"  to='/#aboutme' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>About<span className="sr-only">(current)</span></NavLink>
                <a className="nav-link" href='/Resume_Shane_Parkerson_2018.pdf' download>Resume<span className="sr-only">(current)</span></a>
                <NavLink className="nav-link" to='/#portfolio' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Portfolio<span className="sr-only">(current)</span></NavLink>     
                <NavLink className="nav-link" smooth to='/#contact'>Contact<span className="sr-only">(current)</span></NavLink>   
            </div>
        </div>
    </div>

);



export default NavBar 

