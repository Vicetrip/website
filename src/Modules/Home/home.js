import React, { Component } from 'react';
import NavBar from '../Shared/Components/Navbar/navbar';
import WelcomeBanner from './Components/welcome-banner/welcome-banner';
import AnimBox from './Components/anim-box/anim-box';

import './home.css'
import WhatWe from './Components/what-we/what-we';
import MidBanner from './Components/mid-banner/mid-banner';

class HomeModule extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="main-first">
                    <NavBar />
                    <WelcomeBanner />
                    <AnimBox />
                </div>
                <WhatWe />
                <MidBanner />
            </React.Fragment>
         );
    }
}
 
export default HomeModule;