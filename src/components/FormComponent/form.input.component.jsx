import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

const FormInput = ({label, name, value, placeholder, type, onChange, error}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            type={type}
            name={name}
            className={classnames('form-control form-control-lg', { 'is-invalid': error })}
            placeholder={placeholder}
            value={value} 
            onChange={onChange}/>
            <div className="invalid-feedback">This must not be empty.</div>
    </div>
  )
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

FormInput.defaultProps = {
    type: 'text'
}

export default FormInput
