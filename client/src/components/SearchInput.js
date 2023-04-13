import React from 'react'

const SearchInput = ({ placeholder }) => {
  return (
    <form>
        <input 
            type="text" 
            placeholder={placeholder}
            className='form-input'
            />
    </form>
  )
}

export default SearchInput