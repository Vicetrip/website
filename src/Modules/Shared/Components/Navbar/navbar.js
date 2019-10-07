import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Assets Files
import Logo_Full from '../../../../Assets/logo_full.png'
import './navbar_style.css'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className="container-fluid">
                    <div className="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
                        <div className="Logo">
                            <img src={Logo_Full} className="logo" alt="Vicetrip logo" />
                        </div>
                        <div className="MenuContainer">
                            <nav>
                                <ul className="menu"> 
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/products">Products</Link>
                                        </li>                      
                                        <li>
                                            <Link to="/services">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="contact-us">Contact Us</Link>
                                        </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="d-flex mt-lg-1 mt-sm-2 mt-3 justify-content-center">
                            <button className="btn btn-outline-primary ml-3 mr-1">Careers</button>
                            <div></div>
                            <button className="btn btn-outline-success ml-1 mr-3">Internship</button>
                        </div>
                    </div>
                </div>
        </header> );
    }
}
 
export default NavBar;