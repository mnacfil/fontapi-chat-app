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
  
  .main-container {
    width: 90vw;
    margin: 0 auto;
    height: calc(100vh - 4rem);
    display: grid;
    grid-template-columns: 350px 1.5fr 100px;
  }
`;  

export default Main