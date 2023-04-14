import React from 'react'
import Chat from './Chat';
import styled from 'styled-components';
// import users from '../users'
import {useAppContext } from '../context/App/context'
import { useAccountContext } from '../context/Account/context';

const ChatBox = () => {
  const { chattedUsers, dbUsers, setCurrentChat, onlineUsers, receiveMessage, messages } = useAppContext();
  const { user } = useAccountContext();
  const users = dbUsers.filter(dbUser => chattedUsers.includes(dbUser._id));
  return (
    <Wrapper>
      {chattedUsers.length === 0 ?  
        (<div>
          <p>You have no conversation</p>
        </div>)
      :
        <>
          {users.map((chatUser, index) => {
              const isOnline = onlineUsers.find(ou => ou.userID === chatUser._id);

            return (
              <Chat 
                key={index} 
                {...chatUser} 
                setCurrentChat={setCurrentChat}
                userID = {user.userID}
                isOnline = { isOnline !== undefined ? true: false }
                receiveMessage={receiveMessage}
                messages={messages}
                />
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