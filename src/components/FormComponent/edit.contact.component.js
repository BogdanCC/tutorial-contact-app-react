import React, { Component } from 'react';
import { Consumer } from '../../context';
import FormInput  from './form.input.component';
import axios from 'axios';

export default class EditContact extends Component {
    // Component state
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    // Handles input change - saves new values to state with every key stroke
    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    // Handles submit - input values are already in state due to handleChange method
    handleSubmit = async (e, dispatch) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        // Check for errors, return if has any
        if(this.hasErrors(name, email, phone)) return;
        
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`, {name, email, phone});
        console.log(res);
        dispatch({type: 'UPDATE_CONTACT', payload: res.data});
        
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
            <Consumer>{value => {
                const { dispatch } = value;
                return (
                    <div className="card mb-3">
                        <div className="card-header">Edit Contact</div>
                        <div className="card-body">
                            <form onSubmit={e => this.handleSubmit(e, dispatch)}>
                                <FormInput 
                                    label="Name"
                                    name="name"
                                    value={name}
                                    placeholder="Enter name..."
                                    onChange={this.handleChange}
                                    error={errors.name} />
                                <FormInput 
                                    label="Email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter email..."
                                    type="email"
                                    onChange={this.handleChange}
                                    error={errors.email} />
                                <FormInput 
                                    label="Phone"
                                    name="phone"
                                    value={phone}
                                    placeholder="Enter phone..."
                                    onChange={this.handleChange}
                                    error={errors.phone} />
                                <input type="submit" value="Update Contact" className="btn btn-block btn-danger" />
                            </form>
                        </div>
                    </div>
                );
            }}
            </Consumer>
            )   
    }
}