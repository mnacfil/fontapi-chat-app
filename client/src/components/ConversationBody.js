import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/App/context';

const ConversationBody = () => {
  const { messages } = useAppContext();
  console.log(messages);

  return (
    <Wrapper>
      <div className="conversation-body-container">
        {
          messages.map((item, index) => {
            return (
              <div className='left-message' key={index}>
                <p className='other'>
                  {item.message}
                </p>
              </div>
            )
          })
      }
          {/* <div className='right-message'>
            <p className='sender'>
              "hello"
            </p>
          </div> */}
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