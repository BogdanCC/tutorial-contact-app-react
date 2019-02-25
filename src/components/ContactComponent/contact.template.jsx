import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';

class ContactTemplate extends Component {

    state = {
        showContactInfo: true
    }

    onExpandClick = () => this.setState({showContactInfo: !this.state.showContactInfo});
    
    onDeleteClick = async (id, dispatch) => {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .catch(e => {console.log(e); dispatch({type : 'DELETE_CONTACT', payload: id});});
        if (res.status === 200) dispatch({type : 'DELETE_CONTACT', payload: id});
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name + ' '} 
                                <i onClick={() => this.onExpandClick()} className="fa fa-sort-down"></i>
                                <i className="fas fa-times" onClick={() => this.onDeleteClick(id, dispatch)}></i>
                                <Link to={`contact/edit/${id}`} >
                                    <i 
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: 'black',
                                            marginRight: '1rem'
                                        }}>
                                    </i>
                                </Link>
                            </h4>
                            { showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{phone}</li>
                                </ul> 
                                ) : null
                            }
                        </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default ContactTemplate;
