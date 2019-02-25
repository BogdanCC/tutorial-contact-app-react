import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';

import ContactTemplate from './contact.template';
import './contact.component.css';

class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => { 
                    const { contacts } = value;
                    return (
                    <Fragment>
                        <h1 className="mb-4 mt-5">
                            <span className="text-primary">Contact</span> List
                        </h1>
                        {contacts.map(contact => (
                            <ContactTemplate 
                                key={contact.id} 
                                contact={contact}  
                                onExpandClick={this.onExpandClick} />
                        ))}
                    </Fragment>
                )}}
            </Consumer>
        )
    }
}

export default Contacts;