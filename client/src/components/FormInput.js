import React from 'react'

const FormInput = ({ label, name, value, type, handleChange }) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <input
            name={name}
            type={type} 
            value={value}
            className='form-input'
            onChange={handleChange}
        />
    </div>
  )
}

export default FormInput