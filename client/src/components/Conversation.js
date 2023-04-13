import React from 'react';
import styled from 'styled-components';
import ConversationHeader from './ConversationHeader';
import ConversationFooter from './ConversationFooter';
import ConversationBody from './ConversationBody'

const Conversation = () => {
  return (
    <Wrapper>
      <div className="conversation-container">
        <ConversationHeader />
        <ConversationBody />
        <ConversationFooter />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-right: 1px solid var(--grey-200);

  .conversation-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }
`;

export default Conversation