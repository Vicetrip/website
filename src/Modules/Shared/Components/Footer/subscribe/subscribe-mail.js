import React, { Component } from 'react';

import './subscribe-mail.css'
import mail from '../../../../../Assets/email.svg'

class SubscribeMail extends Component {
    state = {  }
    render() { 
        return ( <footer className="py-5">
                <div className="container py-xl-5 py-lg-3">
                    <div className="subscribe mx-auto">
                        <div className="img-holder row">
                            <img src={mail} alt="mail box" className="img-fluid svg-img mx-auto py-4" />
                        </div>
                        <h3 className="title text-center font-weight-bold">Stay Updated !</h3>
                        <p className="sub-title text-center mt-3 mb-sm-5 mb-4">Enroll your email id to get updated in your business and sustain in this very competitive industry.</p>
                        <form action="#" method="post" className="subscribe-form pt-2">
                            <div className="d-flex">
                                <input className="form-control" type="email" placeholder="Enter your email..." name="email" required="" />
                                <button className="btn form-control w-50" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
        </footer> );
    }
}
 
export default SubscribeMail;