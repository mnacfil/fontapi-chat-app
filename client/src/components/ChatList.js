import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import ChatBox from './ChatBox';
import {} from 'react-icons'
const ChatList = () => {
  return (
    <Wrapper>
      <div className="chatList-container">
        <div className="chatList-title">
          <h3>Chats</h3>
        </div>
        <SearchInput placeholder='Search user...'/>
        <ChatBox />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-right: 1px solid var(--grey-200);
  .chatList-container {
    width: 95%;
    .chatList-title {
      margin-top: 1rem;
    }
  }
`;

export default ChatList