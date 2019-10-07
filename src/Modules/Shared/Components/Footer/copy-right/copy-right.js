import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './copy-right.css'

class CopyRight extends Component {
    state = {  }
    render() { 
        var Year = new Date().getFullYear()
        return ( <React.Fragment>
            <div className="copy-bottom bg-li py-3 border-top">
                <div className="container-fluid">
                    <div className="d-md-flex px-md-3 position-relative text-center">
                        <div className="social-icons-footer mb-md-0 mb-3">
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-google-plus"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-twitter"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span className="fa fa-instagram"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="copy_right mx-md-auto mb-md-0 mb-3">
                            <p className="text-bl let">
                                vicetrip.com © {
                                    Year
                                }. All rights reserved
                            </p>
                        </div>
                        <Link to="#" className="move-top">
                            <span className="fa fa-level-up"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment> );
    }
}
 
export default CopyRight;