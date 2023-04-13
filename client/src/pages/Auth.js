import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FormInput } from '../components'
import { useAccountContext } from '../context/Account/context';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const SignIn = () => {
    const {
        userInput, 
        handleInput,
        isMember,
        toggleMember,
        userAction,
        registerUser,
        loginUser,
        clearInputs,
        isLogin
    } = useAccountContext();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleInput({ name, value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = userInput;
        if(!email || !password || (userAction === 'register' && (!firstName || !lastName) )) {
            toast.error('Please fill all field.');
            return;
        }
        if(userAction === 'login') {
            loginUser({
                 email: userInput.email, 
                 password: userInput.password
            });
            toast.success(`Welcome ${firstName}`);
        }
        if(userAction === 'register') {
            registerUser(userInput);
            toast.success(`Welcome ${firstName}`);
        }
        clearInputs();
    }

    useEffect(() => {
        // after the user login, progmmatically navigate user to root/home page
        if(isLogin) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }, [isLogin]);

  return (
    <Wrapper>
        <div className="auth-container">
            <h2>My App</h2>
            <form className='form' onSubmit={handleSubmit}>
                <p className='error'>Error message</p>
                <h3>{isMember ? 'Login' : 'Register'}</h3>
                 { !isMember && 
                    <FormInput 
                        label='First Name' 
                        name='firstName'
                        value={userInput.firstName}
                        type="text"
                        handleChange={handleChange}
                    />
                 }
                 { !isMember && 
                    <FormInput 
                        label='Last Name' 
                        name='lastName'
                        value={userInput.lastName}
                        type="text"
                        handleChange={handleChange}
                    />
                 }
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
                <button 
                    className='btn btn-block' 
                    type='submit'
                    >
                    Submit
                </button>
                <p>
                    { isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button onClick={toggleMember} type='button'>
                        { isMember ? 'Register': 'Login' }
                    </button>
                </p>
            </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
    display: grid;
    place-items: center;
    min-height: 100vh;

    .auth-container {
        h3 {
            text-align: center;
        }
        .btn {
            margin: 1rem 0;
            font-size: 1.1rem;
        }
        p {
            text-align: center;
            margin: 0;

            button {
                color: var(--primary-500);
                cursor: pointer;
                border: none;
                background: none;
                margin-left: 3px;
            }
        }
    }
`;

export default SignIn