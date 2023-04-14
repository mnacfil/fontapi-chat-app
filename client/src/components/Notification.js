import React, { useEffect, useState } from 'react';
import {IoIosNotifications} from 'react-icons/io';
import styled from 'styled-components';
import { useAppContext } from '../context/App/context';
import { serverBaseUrl } from '../util/axios';
import {usersPath} from '../util/constant';

const Notification = () => {
    const {notification, setNotification, receiveMessage} = useAppContext();
    const [showNotificationData, setShowNotificationData] = useState(false);
    const [sender, setSender] = useState(null);
    const [ notificationState, setNotificationState] = useState('No notification');

    const getUser = async() => {
        try {
            if(!receiveMessage?.sender) return;
            const response = await serverBaseUrl.get(`${usersPath}/${receiveMessage?.sender}`);
            console.log(response.data.data);
            setSender(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    
    useEffect(() => {
        if(notification > 0) {
            setNotificationState('sent you a message');
        }
    }, [notification]);

    const toggleNotification = () => {
        if(notification > 0) {
            setNotification(0);
        } else {
            setNotificationState('No notification');
        }
        setShowNotificationData(prevState => !prevState);
    }
  return (
    <Wrapper>
        <div className="notifications" onClick={toggleNotification}>
            <IoIosNotifications />
            {notification > 0 && 
                <div className='count'>
                    {notification}
                </div>
            }
        </div>
        <div 
            className={`${showNotificationData ? 'show-notification' : ''} notifications-container`}
            >
            <div className="notification-body">
                {notificationState}
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    .notifications {
        position: relative;
        margin-right: 7rem;
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
    .notifications-container {
        position: absolute;
        top: 2.75rem;
        right: 0.3rem;
        background-color: var(--white);
        width: 300px;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-2);
        display: none !important;
         p {
            color: var(--grey-700) !important;
         }
    }
    .show-notification {
        display: block !important;
    }
`;

export default Notification