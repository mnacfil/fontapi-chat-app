import React from 'react'
import Chat from './Chat';
import styled from 'styled-components';
import users from '../users'
import { useGlobalContext } from '../context/App/context';

const ChatBox = () => {
  const value = useGlobalContext();
  return (
    <Wrapper>
        {users.map((user, index) => {
            return (
                <Chat key={index} {...user}/>
            )
        })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 1rem;
`;

export default ChatBox