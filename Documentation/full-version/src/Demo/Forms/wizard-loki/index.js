import React, { Component } from 'react';
import Loki from 'react-loki';

import UserForm from './UserForm';
import PasswordForm from './PasswordForm';
import NewsletterForm from './NewsletterForm';

export default class FormWizard extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            receiveNewsletter: false,
        },
    };

    _mergeValues(values) {
        this.setState({
            user: {
                ...this.state.user,
                ...values
            },
        });
    }

    _finishWizard() {
        console.log('Completed!');
    }

    render() {
        const complexSteps = [
            {
                label: 'Step 1',
                icon: <i className="fa fa-user"/>,
                component: <UserForm user={this.state.user} />,
            },
            {
                label: 'Step 2',
                icon: <i className="fa fa-lock"/>,
                component: <PasswordForm user={this.state.user} />,
            },
            {
                label: 'Step 3',
                icon: <i className="fa fa-envelope"/>,
                component: <NewsletterForm user={this.state.user} />,
            },
        ];

        return (
            <div className="Demo">
                <Loki
                    steps={complexSteps}
                    onNext={this._mergeValues.bind(this)}
                    onBack={this._mergeValues.bind(this)}
                    onFinish={this._finishWizard.bind(this)}
                    noActions />
            </div>
        );
    }
}