import React from 'react';
import { Consumer } from '../../context';
import FormInput  from './form.input.component';

const ContactFormTemplate = props => {
    const { name, email, phone, handleChange, handleSubmit, errors } = props;
    return (
        <Consumer>{value => {
            const { dispatch } = value;
            return (
                <div className="card mb-3 mt-4">
                    <h4 className="card-header">Add Contact</h4>
                    <div className="card-body">
                        <form onSubmit={e => handleSubmit(e, dispatch)}>
                            <FormInput 
                                label="Name"
                                name="name"
                                value={name}
                                placeholder="Enter name..."
                                onChange={handleChange}
                                error={errors.name} />
                            <FormInput 
                                label="Email"
                                name="email"
                                value={email}
                                placeholder="Enter email..."
                                type="email"
                                onChange={handleChange}
                                error={errors.email} />
                            <FormInput 
                                label="Phone"
                                name="phone"
                                value={phone}
                                placeholder="Enter phone..."
                                onChange={handleChange}
                                error={errors.phone} />
                            <input type="submit" value="Add Contact" className="btn btn-block btn-outline-primary" />
                        </form>
                    </div>
                </div>
            );
        }}
        </Consumer>
    )
}

export default ContactFormTemplate;