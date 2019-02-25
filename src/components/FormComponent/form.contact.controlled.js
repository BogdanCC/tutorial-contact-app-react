import React, { Component } from 'react';
import ContactFormTemplate from './form.contact.template.controlled';

export default class ContactForm extends Component {
    
    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@yahoo.com',
        phone: '777-777-777'
    }

    handleSubmit = (e, nameInput, emailInput, phoneInput) => {
        e.preventDefault();
        const contact = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput
        }
        console.log(contact)
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <ContactFormTemplate 
                name={name}
                email={email}
                phone={phone}
                handleSubmit={this.handleSubmit} />
        )
    }
}