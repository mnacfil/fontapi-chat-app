import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5';
import SearchInput from './SearchInput';
import styled from 'styled-components';

const ConversationFooter = () => {
  return (
    <Wrapper>
        <div className="controller-container">
            <span><IoAddCircleSharp /></span>
            <SearchInput 
                placeholder="Aa"
            />
        </div>
  </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 5px;
    .controller-container {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;

        span {
            margin-right: 5px;
            display: grid;
            place-items: center;
            svg {
                font-size: 2rem;
                cursor: pointer;
            }
        }

        .form-input {
            background-color: var(--grey-100);
            border: none;

            &::placeholder {
                color: var(--grey-600);
            }
        }
    }
`;

export default ConversationFooter