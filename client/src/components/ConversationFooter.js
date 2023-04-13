import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5';
import SearchInput from './SearchInput'

const ConversationFooter = () => {
  return (
    <div className="controller">
        <div className="controller-container">
            <span><IoAddCircleSharp /></span>
            <SearchInput />
        </div>
  </div>
  )
}

export default ConversationFooter