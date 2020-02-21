import React from 'react';
import {NavLink} from 'react-router-dom';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

class PersonalInfo extends React.Component {
    state = {
        gender: 'f'
    };

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
                                <h5 className="mb-4">Personal Information</h5>
                                <div className="btn-group btn-group-toggle btn-auth-gen mb-4" data-toggle="buttons">
                                    <label className={this.state.gender === 'f' ? 'active btn btn-outline-theme2 btn-icon' : 'btn btn-outline-theme2 btn-icon'}>
                                        <input type="radio" name="options" id="option1" onChange={() => this.setState({gender: 'f'})}/><span><i className="fa fa-mars"/><small className="d-block">Female</small></span>
                                    </label>
                                    <label className={this.state.gender === 'm' ? 'active btn btn-outline-theme2 btn-icon' : 'btn btn-outline-theme2 btn-icon'}>
                                        <input type="radio" name="options" id="option2" onChange={() => this.setState({gender: 'm'})}/> <span><i className="fa fa-venus"/><small className="d-block">Male</small></span>
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <select className="form-control">
                                        <option>India</option>
                                        <option>Peris</option>
                                        <option>China</option>
                                    </select>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="date" className="form-control"/>
                                </div>
                                <button className="btn btn-primary mb-4 shadow-2">Register</button>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default PersonalInfo;