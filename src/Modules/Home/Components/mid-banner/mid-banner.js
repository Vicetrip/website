import React, { Component } from 'react';
import './mid-banner.css'
import team from '../../../../Assets/banner/banner (4).svg'

class MidBanner extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <section className="py-5">
                <div className="container py-xl-5 py-lg-3">
                    <div className="row">
                        <div className="col-lg-6 about-tech">
                            <h6>Our Technology</h6>
                            <h3 className="text-da">10+ Years of journey in Technology</h3>
                            <p className="mt-4">
                                Our core strength is our team completely formed by like minded people who are having thurst to acheive the next level in technology.
                            </p>
                            <ul className="our-strength mt-4">
                                <li>Helps businesses to perform seamless</li>
                                <li>Ensures businesses are in uptrend </li>
                                <li>Safety & Security is on top priority</li>
                                <li>Offers more platform availability</li>
                                <li>Improved User Experience</li>
                                <li>Completely Data Driven Decision</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                            <img src={team} className="img-fluid mt-5" alt="Team" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment> );
    }
}
 
export default MidBanner;