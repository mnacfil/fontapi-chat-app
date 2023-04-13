import React from 'react'
import Chat from './Chat';
import styled from 'styled-components';
// import users from '../users'
import {useAppContext } from '../context/App/context'

const ChatBox = () => {
  const { chattedUsers, dbUsers } = useAppContext()
  const users = dbUsers.filter(dbUser => chattedUsers.includes(dbUser._id))
  return (
    <Wrapper>
      {chattedUsers.length === 0 ?  
        (<div>
          <p>You have no conversation</p>
        </div>)
      :
        <>
          {users.map((user, index) => {
            return (
              <Chat key={index} {...user}/>
              )
            })}
        </>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 1rem;
`;

export default ChatBox