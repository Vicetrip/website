import React, { Component } from 'react';
import NavBar from '../Shared/Components/Navbar/navbar';
import WelcomeBanner from './Components/welcome-banner/welcome-banner';
import AnimBox from './Components/anim-box/anim-box';

import './home.css'
import WhatWe from './Components/what-we/what-we';
import MidBanner from './Components/mid-banner/mid-banner';
import OurService from './Components/our-service/our-service';
import SubscribeMail from '../Shared/Components/Footer/subscribe/subscribe-mail';
import CopyRight from '../Shared/Components/Footer/copy-right/copy-right';

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
                <OurService />
                <SubscribeMail />
                <CopyRight />
            </React.Fragment>
         );
    }
}
 
export default HomeModule;