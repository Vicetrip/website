import React, { Component } from 'react';
import './our-service.css'
import serv1 from '../../../../Assets/serv-logo/api.svg'
import serv2 from '../../../../Assets/serv-logo/consulting.svg'
import serv3 from '../../../../Assets/serv-logo/help.svg'

class OurService extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
            <section className="ban-bot bg-li py-5">
                <div className="container py-xl-5 py-lg-3">
                    <h3 className="title text-center font-weight-bold">Our Services</h3>
                    <p className="sub-title text-center mt-3 mb-sm-5 mb-4">
                        Are you a startup, looking for Tech support at affordable cost? you ended up in the right place, we are offering following services that you avail right away with a click.
                    </p>
                    <div className="row pt-lg-4">
                        <div className="col-lg-4 our-serv text-center">
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-holder">
                                        <img src={serv1} alt="Services 1" className="img-fluid svg-img" /> 
                                    </div>
                                    <h5 className="card-title mt-4 mb-3">Product Development</h5>
                                    <p className="card-text">You have innovative idea in travel domain?? want to make a product of it please feel free to ping us we are here to serve you. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 our-serv text-center">
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-holder">
                                        <img src={serv2} alt="Services 1" className="img-fluid svg-img" /> 
                                    </div>
                                    <h5 className="card-title mt-4 mb-3">Business Consultation</h5>
                                    <p className="card-text">Want to uplift your business to next level? We have experienced professionals, who can offer you best in class consultancy service </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 our-serv text-center">
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-holder">
                                        <img src={serv3} alt="Services 1" className="img-fluid svg-img" /> 
                                    </div>
                                    <h5 className="card-title mt-4 mb-3">Customer Support</h5>
                                    <p className="card-text"> Looking customer support system to deal with your client? Yes, we have one-stop solution! We settled everything ready to avail. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment> );
    }
}
 
export default OurService;