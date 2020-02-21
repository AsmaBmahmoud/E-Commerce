import React from 'react';
import Aux from "../../hoc/_Aux";

class UserList extends React.Component {
    state = {
        isChecked: false
    };

    checkHandler = (e) => {
        if (e.target.checked) {
            this.setState({isChecked: true});
        } else {
            this.setState({isChecked: false});
        }

    };

    render() {
        return (
            <Aux>
                <div className="to-do-list mb-3">
                    <div className="checkbox-fade fade-in-default">
                        <label className={this.state.isChecked ? 'check-task done-task' : 'check-task'}>
                            <input type="checkbox" value="" defaultChecked={this.state.isChecked} onChange={(e) => this.checkHandler(e)}/>
                            <span className="cr">
                            <i className="cr-icon fa fa-check"/>
                        </span>
                            <div className="row">
                                <div className="col-auto">
                                    <img className="rounded-circle" style={{width: '40px'}} src={this.props.avatar}
                                         alt="chat-user"/>
                                </div>
                                <div className="col">
                                    <h6>{this.props.name}</h6>
                                    <p className="text-muted m-0">{this.props.caption}</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default UserList;