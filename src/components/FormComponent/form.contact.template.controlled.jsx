import React from 'react';

const ContactFormTemplate = props => {
    const { name, email, phone, handleSubmit } = props;
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const phoneInput = React.createRef();

    return (
    <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
            <form onSubmit={e => handleSubmit(e, nameInput.current.value, emailInput.current.value, phoneInput.current.value)}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter name..."
                    defaultValue={name}
                    ref={nameInput} />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email..."
                    defaultValue={email}
                    ref={emailInput} />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter phone..."
                    defaultValue={phone}
                    ref={phoneInput} />
                </div>
                <input type="submit" value="Add Contact" className="btn btn-block btn-danger" />
            </form>
        </div>
    </div>
    )
}

export default ContactFormTemplate;