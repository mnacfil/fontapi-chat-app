import React from 'react'
import styled from 'styled-components'
import { BsWhatsapp } from 'react-icons/bs'
import { useAccountContext } from '../context/Account/context'

const Header = () => {
  const { user } = useAccountContext()
  return (
    <HeaderWrapper>
      <div className="header-container">
        <div className="logo">
          <BsWhatsapp />
        </div>
        <p>Welcome to my chat app, <span>{user.firstName}</span></p>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background: var(--primary-500);
  height: 4rem;
  .header-container {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;

    .logo {
      margin-right: 1rem;
      display: grid;
      place-items: center;

      svg {
        font-size: 1.5rem;
        color: var(--white);
      }
    }
    p {
      margin: 0;
      color: var(--primary-100);
      letter-spacing: var(--letterSpacing);

       span {
        text-transform: uppercase;
        color: var(--white);
       }
    }
  }
`;

export default Header