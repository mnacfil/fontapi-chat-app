import { 
    useContext, 
    createContext,
    useState,
    useEffect 
} from 'react';
import { serverBaseUrl } from '../../util/axios';
import { loginPath, registerPath } from '../../util/constant';
import { getUserFromLS, saveUserToLS, saveUserToken } from '../../util/localStorage';
const AccountContext = createContext();

const defaultUserInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

export const AccountProvider = ({ children }) => {
    const [ isLoading, setIsLoading] = useState(false);
    const [ isError, setIsError] = useState(false);
    const [ user, setUser ] = useState(getUserFromLS());
    const [ userInput, setUserInput ] = useState(defaultUserInput);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ isMember, setIsMember ] = useState(true);
    const [ userAction, setUserAction ] = useState('login');

    const handleInput = ({ name, value }) => {
        setUserInput((prevValue) => {
            return { ...prevValue, [name]: value }
        });
    }
    const toggleMember = () => {
        setIsMember(prev => !prev);
        if(userAction === 'login') {
            setUserAction('register');
        } else {
            setUserAction('login');
        }
    }
    const registerUser = async(user) => {
        setIsLoading(true);
        try {
            const response = await serverBaseUrl.post(registerPath, user)
            const { payloadUser, token } = response.data.data;
            saveUserToLS(payloadUser);
            saveUserToken(token);
            setIsLoading(false);
            setIsLogin(true);
            setUser(payloadUser);
        } catch (error) {
            console.log(error);
            setIsError(error);
            setIsLoading(false);
        }
    }
    const loginUser = async(user) => {
        try {
            const response = await serverBaseUrl.post(loginPath, user)
            const { payloadUser, token } = response.data.data;
            saveUserToLS(payloadUser);
            saveUserToken(token);
            setIsLoading(false);
            setIsLogin(true);
            setUser(payloadUser);
        } catch (error) {
            console.log(error);
            setIsError(error)
            setIsLoading(false);
        }
    }
    const clearInputs = () => {
        setUserInput(defaultUserInput);
    }

    return (
        <AccountContext.Provider
            value={{
                userInput,
                handleInput,
                isLogin,
                toggleMember,
                isMember,
                setIsLogin,
                isError,
                userAction,
                registerUser,
                loginUser,
                clearInputs,
                user
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}

export const useAccountContext = () => {
    return useContext(AccountContext);
}