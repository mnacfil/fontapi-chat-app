import React from 'react';
import styled from 'styled-components';

const ConversationBody = () => {
  return (
    <Wrapper>
      <div className="conversation-body-container">
        <div className='left-message'>
          <p className='other'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, odio.
          </p>
        </div>
        <div className='right-message'>
          <p className='sender'>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .conversation-body-container {
    padding: 5px;

    .left-message {
      text-align: left;
      margin-bottom: 5px;
    }
    .right-message {
      text-align: right;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      display: inline-block;
      padding: 5px;
      border-radius: 10px;
      box-shadow: var(--shadow-2);
      margin: 0;
    }
    .other {
      background-color: var(--grey-100);
    }
    .sender {
      background-color: var(--primary-800);
      color: var(--white);
    }
  }
`;


export default ConversationBody