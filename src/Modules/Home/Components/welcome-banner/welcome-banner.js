import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import banner from '../../../../Assets/banner/banner (1).svg'
import './welcome-banner.css'


 class WelcomeBanner extends Component {
     state = {  }
     render() { 
         return ( <div className="banner pos-rel"> 
            <div className="container">
                <div className="d-md-flex">
                    <div className="ban-txt">
                        <h3 className="ban-ttl">
                            Travel<br />
                            <span>Simplified</span>
                        </h3>
                        <p className="ban-des">
                            We are not an yet another OTA technology provider, Why because, We are not just replicating, we are committed to revolutionize the industry with cutting Edge-Technology. To make every individual's travel to be simplified.
                        </p>
                        <Link className="btn button-style mt-md-5 mt-4" to="/#">
                            Read More...
                        </Link>
                    </div>
                    <div className="ban-img">
                        <img src={banner} alt="Welcome Banner" className="img-fluid" />
                    </div>

                </div>
            </div>
         </div> );
     }
 }
  
 export default WelcomeBanner;