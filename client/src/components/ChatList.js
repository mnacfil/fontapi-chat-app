import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import ChatBox from './ChatBox';
import OnlineUsers from './OnlineUsers';
import {} from 'react-icons';
import { useAppContext } from '../context/App/context';

const ChatList = () => {
  const [activeTab, setActiveTab] = useState('friends');
  const { onlineUsers } = useAppContext();
  const handleTab = (e) => {
    setActiveTab(e.target.name);
  }

  return (
    <Wrapper>
      <div className="chatList-container">
        <div className="chatList-title">
          <h3>Chats</h3>
        </div>
        <SearchInput placeholder='Search user...'/>
        <div className='chatList-tab'>
          <button 
            className={`${activeTab === 'friends' && 'active-tab'} btn btn-block friends`}
            onClick={handleTab}
            name='friends'
          >
            Friends
          </button>
          <button 
            className={`${activeTab === 'online' && 'active-tab'} btn btn-block online`}
            onClick={handleTab}
            name='online'
          >
            Online ({onlineUsers.length})
          </button>
        </div>
        {
          activeTab === 'friends' && <ChatBox />
        }
                {
          activeTab === 'online' && <OnlineUsers />
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-right: 1px solid var(--grey-200);
  .chatList-container {
    width: 95%;
    .chatList-title {
      margin-top: 1rem;
    }
    .chatList-tab {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      
      .btn {
        background-color: var(--grey-500);
      }
      .friends {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      .online {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
      .active-tab {
        background-color: var(--primary-500);
      }
    }
  }
`;

export default ChatList