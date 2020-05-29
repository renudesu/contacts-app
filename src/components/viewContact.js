import React from 'react';
import { withRouter } from 'react-router-dom';

import Alert from './closeButton'

import contact from '../services/contactService';
class ViewContact extends React.Component {
    constructor() {
        super();
        this.state = {
            viewContact: [],
            isActive: true,
        }
    }
    componentDidMount() {
        var selectContact = contact.getSelectedContact();
        console.log(selectContact);
        this.setState({
            viewContact: selectContact
        }, () => console.log(this.state.viewContact))
    }
    close = () => {
       this.props.history.push('/contacts')
    }
    render() {
        return (
            <div className="row">
                <div className="card" >

                    <div className="card-body" >
                        <button type="button" className="close right" aria-label="Close" onClick={this.close} >
                            {/* close */}
                            <span aria-hidden="true">&times;</span>
                        </button>
                        {/* <Alert /> */}
                        <div className="renu ">{this.state.viewContact && this.state.viewContact.nickName}</div>
                        <div className="mt-5  ml-5 mr-5">
                            Full Name:{this.state.viewContact && this.state.viewContact.fullName}
                        </div>
                        <div className="mt-5  ml-5 mr-5">
                            Email:{this.state.viewContact && this.state.viewContact.userName}
                        </div>
                        <div className="mt-5  ml-5 mr-5">
                            phone:{this.state.viewContact && this.state.viewContact.phoneNumber}
                        </div>
                        <div className="mt-5  ml-5 mr-5">
                            Company:{this.state.viewContact && this.state.viewContact.companyName}
                        </div>
                        <div className="mt-5 mb-5 ml-5 mr-5">
                            Address:{this.state.viewContact && this.state.viewContact.Address}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(ViewContact);