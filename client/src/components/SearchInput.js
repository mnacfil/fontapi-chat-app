import React from 'react'

const SearchInput = ({ placeholder, handleChange, value }) => {
  return (
      <input 
          type="text" 
          placeholder={placeholder}
          className='form-input'
          value={value}
          onChange={handleChange}
        />
  )
}

export default SearchInput