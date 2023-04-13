import React from 'react';
import styled from 'styled-components';
import { FormInput } from '../components'
import { useAccountContext } from '../context/Account/context'

const SignIn = () => {
    const {userInput, handleInput} = useAccountContext();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleInput({ name, value });
    }

  return (
    <Wrapper>
        <div className="signin-container">
            <h2>Sign/Signup</h2>
            <form className='form'>
                <h3>Sign up</h3>
                <FormInput 
                    label='First Name' 
                    name='firstName'
                    value={userInput.firstName}
                    type="text"
                    handleChange={handleChange}
                />
                <FormInput 
                    label='Last Name' 
                    name='lastName'
                    value={userInput.lastName}
                    type="text"
                    handleChange={handleChange}
                />
                <FormInput 
                    label='Email' 
                    name='email'
                    value={userInput.email}
                    type="email"
                    handleChange={handleChange}
                />
                <FormInput 
                    label='Password' 
                    name='password'
                    value={userInput.password}
                    type="password"
                    handleChange={handleChange}
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