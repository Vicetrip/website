import React, { Component } from 'react';
import './what-we.css'

import prod1 from '../../../../Assets/prod-logo/img1.svg'
import prod2 from '../../../../Assets/prod-logo/img2.svg'
import prod3 from '../../../../Assets/prod-logo/img3.svg'

class WhatWe extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
                <div className="what bg-li py-5">
                    <div className="container py-xl-5 py-lg-3">
                        <h2 className="sec-ttl text-center font-weight-bold mb-4">Our Products</h2>
                        <div className="row about-bottom text-center mt-4">
                            <div className="col-lg-4 about-grid">
                                <div className="about-grid-holder">
                                    <img src={prod1} alt="prod1" className="img-fluid svg-img" />
                                    <h4 className="my-4">Affliate Engine</h4>
                                    <p>Best suitable for marketing company's looking for integrated booking solution.</p>
                                    <ul>
                                        <li>No-Upfront Cost</li>
                                        <li>One click integration</li>
                                        <li>Get Monotize your traffic</li>
                                        <li>Increased Revenue</li>
                                        <li>24/7 support</li>
                                        <li>Maintanence free solution</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 about-grid">
                                <div className="about-grid-holder">
                                    <img src={prod2} alt="prod2" className="img-fluid svg-img" />
                                    <h4 className="my-4">Booking Engine</h4>
                                    <p>Complete End-to-End fully featured booking solution great fit for the Online Travel Agency.</p>
                                    <ul>
                                        <li>Backoffice Facilities</li>
                                        <li>Wider Platform availablity</li>
                                        <li>Supports API Integration</li>
                                        <li>All the supported platform</li>
                                        <li>24/7 support</li>
                                        <li>Automated processes to reduce OP-Ex</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 about-grid">
                            <div className="about-grid-holder">
                                    <img src={prod3} alt="prod3" className="img-fluid svg-img" />
                                    <h4 className="my-4">Market Genie</h4>
                                    <p>An AI driven technology, It markets your property in online, Assist you in pricing.</p>
                                    <ul>
                                        <li>Pay-as-you Go pricing</li>
                                        <li>Hasssle free integration</li>
                                        <li>No Infrastructre needed</li>
                                        <li>Opens multi-channel business</li>
                                        <li>24/7 support</li>
                                        <li>Maintanence free solution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment> );
    }
}
 
export default WhatWe;