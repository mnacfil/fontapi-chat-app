import React, { useState } from 'react';
import {IoIosNotifications} from 'react-icons/io';
import styled from 'styled-components';
import { useAppContext } from '../context/App/context';

const Notification = () => {
    const {notification} = useAppContext()
  return (
    <Wrapper>
        <div className="notifications">
            <IoIosNotifications />
            <div className='count'>
                {notification}
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.notifications {
    position: relative;
    margin-right: 5rem;
    background-color: var(--grey-50);
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    svg {
    font-size: 1.75rem;
    }

    .count {
        position: absolute;
        top: -10px;
        right: -12px;
        color: #fff;
        background-color: red;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: grid;
        place-items: center;
    }
}
`;

export default Notification