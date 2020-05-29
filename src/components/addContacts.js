import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { addContactActions } from '../+state/actions';

// import contact from '../services/contactService';

class AddContacts extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            nickName: '',
            userName: '',
            companyName: '',
            Address: '',
            phoneNumber: '',
            contacts: []
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addContact = () => {

        const userContact = {
            fullName: this.state.fullName,
            nickName: this.state.nickName,
            companyName: this.state.companyName,
            userName: this.state.userName,
            phoneNumber: this.state.phoneNumber,
            Address: this.state.Address
        };

        // contact.addContacts(userContact); // for react js
        this.props.addContacts(userContact);
        this.setState({
            fullName: '',
            nickName: '',
            userName: '',
            companyName: '',
            Address: '',
            phoneNumber: '',
        });

        // console.log(this.state.contacts);

        this.props.history.push('/contacts');
    }
    back = () => {
        this.props.history.push('/contacts');
    }
    render() {

        return (
            <div>

                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">

                                    <label htmlFor="fullName">FullName</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName" placeholder="FullName" onChange={this.onChangeText} />
                                </div>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="nickName">Nickname</label>
                                <input type="text" className="form-control" id="username" name="nickName" placeholder="NickName" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="userName">UserName</label>
                                <input type="text" className="form-control" id="userName" name="userName" placeholder="NickName" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="companyName">Company</label>
                                <input type="text" className="form-control" id="companyName" name="companyName" placeholder="companyName" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">PhoneNumber</label>
                                <input type="text" className="form-control" id="phonenumber" name="phoneNumber" placeholder="PhoneNumber" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Address">Address</label>
                                <input type="text" className="form-control" id="address" name="Address" placeholder="Address" onChange={this.onChangeText} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.addContact}>+ Add Contact</button>
                            <button className="btn btn-primary ml-2" onClick={this.back}>Back</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        contactsOfPerson: state.contacts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addContacts: (value) => dispatch(addContactActions(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddContacts));

