import React from 'react';
import styled from 'styled-components';
import { FormInput } from '../components'

const SignIn = () => {
  return (
    <Wrapper>
        <div className="signin-container">
            <h2>Sign/Signup</h2>
            <form className='form'>
                <h3>Sign up</h3>
                <FormInput 
                    label='First Name' 
                    name='firstName'
                    value=""
                    type="text"
                />
                <FormInput 
                    label='Last Name' 
                    name='lastName'
                    value=""
                    type="text"
                />
                <FormInput 
                    label='Email' 
                    name='email'
                    value=""
                    type="email"
                />
                <FormInput 
                    label='Password' 
                    name='password'
                    value=""
                    type="password"
                />
            </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
    display: grid;
    place-items: center;
    min-height: 100vh;
`;

export default SignIn