import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.styles.scss';



const NavBar = () => (
    <div className='container-fluid navbarlarge-container fixed-top'>
        <div className='row navbarlarge-container-row'>
            <div className='col-12 navbarlarge-container-row-right-col'>
                <NavLink className="nav-link" to='/'>About<span className="sr-only">(current)</span></NavLink>
                <a className="nav-link" href='/Resume_Shane_Parkerson_2018.pdf' download>Resume<span className="sr-only">(current)</span></a>
                <NavLink className="nav-link" exact to='/'>Portfolio<span className="sr-only">(current)</span></NavLink>     
                <NavLink className="nav-link" exact to='/'>Contact<span className="sr-only">(current)</span></NavLink>   
            </div>
        </div>
    </div>

);



export default NavBar 

