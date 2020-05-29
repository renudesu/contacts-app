import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { contactReducer } from './+state/reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Contacts from '../src/components/contacts';
import AddContacts from './components/addContacts';
import ViewContact from './components/viewContact';

const store = createStore(contactReducer, compose(applyMiddleware(thunk), composeWithDevTools()));
class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Redirect
                  to={{
                    pathname: "/contacts"
                  }}
                />
              </Route>
              <Route path='/contacts'>
                <Contacts />
              </Route>
              <Route path='/addcontacts'>
                <AddContacts />
              </Route>
              <Route path='/viewcontact'>
                <ViewContact />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;
