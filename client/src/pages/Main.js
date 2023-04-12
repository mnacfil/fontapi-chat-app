import React from 'react';
import styled from 'styled-components'
import { 
  ChatInfo, 
  ChatList, 
  Conversation,
  Header
} from '../components'

const Main = () => {
  return (
    <MainWrapper>
      <Header />
      <div className="main-container">
        <ChatList />
        <Conversation />
        <ChatInfo />
      </div>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`

`;

export default Main