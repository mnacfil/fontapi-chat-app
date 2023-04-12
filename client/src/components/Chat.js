import React from 'react'
import styled from 'styled-components'

const Chat = ({ firstName, lastName, circle, message, createdAt}) => {
  return (
    <Wrapper>
      <div className="chat-container">
        <div>
          <div className="left">{circle}</div>
          <div className="right">
            <h5 className='name'>{firstName} {lastName}</h5>
            <p>
              <span className='firstName'>{firstName}:</span>
              <span className='message'>{message}</span>
              <span className='time-ago'>{createdAt}</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  margin: 5px 0;
  border-radius: var(--borderRadius);
  padding: 5px;
  cursor: pointer;

  .chat-container {

    div {
      display: flex;
      align-items: center;
      height: 3.5rem;

      .left {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background-color: #888;
        display: grid;
        place-items: center;
        margin-right: 10px;
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        h5 {
          margin: 0;
        }
        p {
          color: var(--grey-400);
          font-size: 14px;
          margin: 0;
          letter-spacing: var(--letterSpacing);
          .firstName {
            margin-right: 5px;
          }
          .message {
            margin-right: 1rem;
          }
        }
      }
    }
  }

  &:hover {
    box-shadow: var(--shadow-4);
    background-color: var(--grey-100);
  }
`;

export default Chat