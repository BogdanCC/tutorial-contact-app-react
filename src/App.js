import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
/** Custom Components */
import Contacts from './components/ContactComponent/contacts.component';
import Header from './components/HeaderComponent/header.component';
import ContactForm from './components/FormComponent/form.contact.component';
import EditContact from './components/FormComponent/edit.contact.component';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/test.component';
import Provider from './context';
/** CSS Styles */
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={ContactForm} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
