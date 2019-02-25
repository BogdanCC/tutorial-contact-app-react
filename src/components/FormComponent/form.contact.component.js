import React, { Component } from 'react';
import ContactFormTemplate from './form.contact.template';
import axios from 'axios';

export default class ContactForm extends Component {
    // Component state
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    // Handles input change - saves new values to state with every key stroke
    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    // Handles submit - input values are already in state due to handleChange method
    handleSubmit = async (e, dispatch) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        // Check for errors, return if has any
        if(this.hasErrors(name, email, phone)) return;

        // Create a new contact object with the validated value
        const newContact = {
            name,
            email,
            phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({ type: 'ADD_CONTACT', payload: res.data })
        
        // Clear this component state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        // Redirect to home
        this.props.history.push('/');
    }

    // Method to check for input errors
    hasErrors(name, email, phone) {
        if(name.trim() === '') {
            this.setState({errors: { name : 'Name is required' }});
            return true;
        }
        if(email.trim() === '') {
            this.setState({errors: { email : 'Email is required' }});
            return true;
        }
        if(phone.trim() === '') {
            this.setState({errors: { phone : 'Phone is required' }});
            return true;
        }
        return false;
    }
    
    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <ContactFormTemplate 
                name={name}
                email={email}
                phone={phone}
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                errors={errors} />
            )   
    }
}