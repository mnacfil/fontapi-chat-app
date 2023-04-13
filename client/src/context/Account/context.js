import { 
    useContext, 
    createContext,
    useState,
    useEffect 
} from 'react';
import { serverBaseUrl } from '../../util/axios'
import { loginPath, registerPath } from '../../util/constant'

const AccountContext = createContext();

const defaultUserInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

export const AccountProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ userInput, setUserInput ] = useState(defaultUserInput)

    const handleInput = ({ name, value }) => {
        setUserInput((prevValue) => {
            return { ...prevValue, [name]: value }
        });
    }


    const registerUser = async(user) => {
        try {
            const response = await serverBaseUrl.post(registerPath, user)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AccountContext.Provider
            value={{
                userInput,
                handleInput
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}

export const useAccountContext = () => {
    return useContext(AccountContext);
}