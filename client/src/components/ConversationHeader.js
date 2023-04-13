import React from 'react'
import {FiPhoneCall} from 'react-icons/fi';
import {FaVideo} from 'react-icons/fa';
import styled from 'styled-components';

const ConversationHeader = () => {
  return (
    <Wrapper>
        <div className="header-container">
            <div className="userAvatar">J</div>
            <div className='user-info'>
                <h5 className='name'>John Wick</h5>
                <div className="options">
                    <span><FiPhoneCall /></span>
                    <span><FaVideo /></span>
                </div>
            </div>
        </div>
  </Wrapper>
  )
}

const Wrapper = styled.header`
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    height: 4.5rem;
    padding: 7px;
    .header-container {
        display: flex;
        align-items: center;
        height: 100%;
        .userAvatar {
            width: 4rem;
            height: 3.5rem;
            border-radius: 50%;
            background-color: var(--primary-700);
            color: var(--white);
            display: grid;
            place-items: center;
            margin-right: 1rem;
        }
        .user-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;;
            h5 {
                margin: 0;
            }
            .options {
                width: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                    display: grid;
                    place-items: center;
                    
                    svg {
                        font-size: 1.25rem;
                        color: var(--primary-500);
                        cursor: pointer;
                    }
                }
            }
        }
    }

`;


export default ConversationHeader