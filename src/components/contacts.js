import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import AddContacts from '../components/addContacts';
import { searchContactAction } from '../+state/actions';
// import SideBar from './sidebar';
import contact from '../services/contactService';
import ViewContact from './viewContact';

class Contacts extends React.Component {
    constructor() {
        super();
        this.state = {
            // contacts: [],
            searchKey: '',
            // itemsToDisplay: []
        }
    }

    // componentDidMount() {

    /******  for react js  */
    // var personContacts = contact.getContacts();
    // console.log(personContacts);
    // this.setState({
    //     contacts: personContacts,
    //     itemsToDisplay: personContacts
    // }, () => console.log(this.state.contacts))
    /********************* */
    // }
    selectContact = (value) => {
        contact.selectedContact(value);
        this.props.history.push('/contacts/viewcontact/' + value.fullName);
        // const routePath = '/contacts/viewcontact/' + value.fullName
        // return <Redirect to={routePath} /> // we can write like this but here it did not work donno why.
        //just iam keeping here for further reference.we use this kind of whenever requires.

    }
    onChangeText = (event) => {
        this.setState({
            searchKey: event.target.value
        })
    }
    search = () => {
        // console.log(this.state.searchKey);
        this.props.searchContact(this.state.searchKey)
        // here function calling part:::  what we wrote in mapDispatch and passing value as this.state.searchKey(i,e parameter value).
        // here we are passing this.state.searchKey  for dispatch :::searchContact: (value) => dispatch(searchContactAction(value)) 
        // console.log(this.state.contacts.contacts)
        /****************** for reactjs */
        // var filteredContacts = this.state.contacts.contacts.filter((item) => {

        //     return item.fullName.toLowerCase().search(this.state.searchKey.toLowerCase()) > -1;

        // })
        // this.setState({
        //     itemsToDisplay: filteredContacts
        // })
        // console.log(filteredContacts);
    }
    render() {
        const contactsList = this.props.contacts.map((value, index) => {
            console.log(value)
            return (
                <tr key={index} onClick={() => this.selectContact(value)}>
                    <div> <input type="checkbox" aria-label="Checkbox for following text input" /></div>

                    <div className="renu">{value.nickName}</div>
                    <div></div>
                    <td className="col-md-0">{value.fullName}
                        <small className="row">{value.userName}</small>
                    </td>
                    <td>{value.companyName}</td>
                </tr>
            );
        })
        return (
            <div>
                {/* <SideBar className="col-md-0">{this.props.children}</SideBar> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#top"><img src="https://img.icons8.com/ios-glyphs/30/000000/search.png" alt="" /></a>
                </nav>
                <div className="row mt-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h3>Contacts</h3>
                        <small>welcome to contact page</small>
                    </div>
                    <div className="col-md-0">
                        <div className="dropdown">
                            sortBy:
                            <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Date Created
                             </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#left">Action</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 "></div>
                    <div className="col-md-3 mt-5">
                        <form className="form-inline  ml-auto my-2 my-lg-0 ">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onChangeText} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.search}>Search {this.state.contacts}</button>
                        </form>
                        {/*                     
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    </div>

                    <div className="col-md-3">
                        {/* which componenent we wanna make nested route .here in "contacts" page we wanna display of "addContacts" page. */}
                        <button className="btn btn-primary mt-5" onClick={() => this.props.history.push('/contacts/addcontacts')}>+ Add Contact</button>
                    </div>
                    <div className="col-md-5">

                        {/* nested Routing declaration */}
                        <Route path={`${this.props.match.url}/addcontacts`} component={AddContacts} />
                        <Route path={`${this.props.match.url}/viewcontact/:id`} component={ViewContact} />
                        {/* /viewcontact/:id`  => with id only we can achieve, coz if we click 1st time contact details displays,and  when click 2nd time it does not disply another contact details
                        so, if we put /:id throught id it opens .coz each contact has its own id right..  */}
                        {/* exact='true' :::: if same route is there it will open */}
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">+</th>
                                    <th scope="col">Basic Info</th>
                                    <th scope="col">Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactsList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
// here we can write store or state or anything,bcoz varibale can be anything. so no matter what is
const mapStateToProps = store => {
    return {
        contacts: store.itemsToDisplay
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // function declaration part, here in seachContact funtion we called another function.
        searchContact: (value) => dispatch(searchContactAction(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Contacts));
