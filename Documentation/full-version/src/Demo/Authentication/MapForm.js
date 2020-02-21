import React from 'react';
import {NavLink} from 'react-router-dom';
import {Map, GoogleApiWrapper}  from 'google-maps-react';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

import DEMO from "../../store/constant";

class MapForm extends React.Component {

    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="container">
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4 col-lg-6 d-none d-md-block d-lg-block">
                                    <div style={{height: '100%', width: '100%'}}>
                                        <Map
                                            centerAroundCurrentLocation
                                            className="map set-map"
                                            google={this.props.google}
                                            zoom={14}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8 col-lg-6">
                                    <div className="card-body text-center">
                                        <div className="row justify-content-center">
                                            <div className="col-sm-10">
                                                <div className="mb-4">
                                                    <i className="feather icon-user-plus auth-icon"/>
                                                </div>
                                                <h3 className="mb-4">Sign up</h3>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Username"/>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="email" className="form-control" placeholder="Email"/>
                                                </div>
                                                <div className="input-group mb-4">
                                                    <input type="password" className="form-control" placeholder="password"/>
                                                </div>
                                                <div className="form-group text-left">
                                                    <div className="checkbox checkbox-fill d-inline">
                                                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                                                            <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}>Newsletter</a> weekly.</label>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary shadow-2 mb-4">Register</button>
                                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'
})(MapForm);