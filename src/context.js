import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [payload, ...state.contacts]
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === payload.id ? contact = payload : contact)
            }
        default:
            return state;
    }
}

export default class Provider extends Component {
    state = {
        contacts: [
            { id: 1, name: 'John doe1', email: 'jdoe1@gmail.com', phone: '555-555-555'},
            { id: 2, name: 'John doe2', email: 'jdoe2@gmail.com', phone: '554-555-555'},
            { id: 3, name: 'John doe3', email: 'jdoe3@gmail.com', phone: '553-555-555'},
            { id: 4, name: 'John doe4', email: 'jdoe4@gmail.com', phone: '552-555-555'}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts: res.data})
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; 