import React from 'react'
import {IoAddCircleSharp} from 'react-icons/io5';
import SearchInput from './SearchInput';
import styled from 'styled-components';
import { useAppContext } from '../context/App/context';

const ConversationFooter = () => {
    const { myMessage, setMyMessage, handleSubmit } = useAppContext()
    const handleChange = (e) => {
        setMyMessage(e.target.value);
    }

    return (
        <Wrapper>
            <div className="controller-container">
                <form>
                    <span><IoAddCircleSharp /></span>
                    <SearchInput 
                        placeholder="Aa"
                        location='chat'
                        value={myMessage}
                        handleChange={handleChange}
                    />
                    <button 
                        className='btn'
                        onClick={handleSubmit}
                        >
                        Send
                    </button>
                </form>
            </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 5px;
    .controller-container {
        form {
            display: grid;
            grid-template-columns: auto 1fr auto;
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
    }
`;

export default ConversationFooter