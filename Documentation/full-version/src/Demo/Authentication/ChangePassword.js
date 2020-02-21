import React from 'react';
import {NavLink} from 'react-router-dom';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

class ChangePassword extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <h5 className="mb-4">Change Password</h5>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Current Password"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="New Password"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="Re-Type New Password"/>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Change Password</button>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default ChangePassword;