import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/App/context';

const ConversationBody = () => {
  const { messages, myMessage } = useAppContext();
  const [ ownMessages, setOwnMessages]= useState([])
  // console.log(messages);

  useEffect(() => {
    setOwnMessages(prevOwnMessages => [...prevOwnMessages, myMessage])
  }, [])

  return (
    <Wrapper>
      <div className="conversation-body-container">
        {
          messages.map((item, index) => {
            <div className='left-message' key={index}>
              <p className='other'>
                {item.message}
              </p>
            </div>
          })
        }
        {
          ownMessages.map((ownItem, index) => {
            return (
              <div className='right-message' key={index}>
                <p className='sender'>
                  {ownItem}
                </p>
              </div>
            )
          })
        }
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