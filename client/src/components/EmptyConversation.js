import React from 'react'
import styled from 'styled-components'

const EmptyConversation = () => {
  return (
    <Wrapper>
        <p>
            No Conversation to display,
            <br />
            Click your chatmate on the left side to start conversation.
        </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    min-height: calc(100vh - 4rem);
    text-align: center;

    p {
        color: var(--grey-500);
    }
`;

export default EmptyConversation