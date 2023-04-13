import { 
    useContext, 
    createContext, 
    useState, 
    useEffect,
} from 'react';
import { serverBaseUrl } from '../../util/axios';
import { conversationPath } from '../../util/constant';
import { useAccountContext } from '../Account/context'

import { io } from 'socket.io-client';
const socket = io('http://localhost:8080/');

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [conversation, setConversation] = useState([]);
    const { user } = useAccountContext();

    useEffect(() => {
        socket.on('connect', (err) => {
            socket.emit('hello', 'hello from client')
        })
    }, []);

    const getUserConversation = async() => {
        try {
            const response = await serverBaseUrl.get(conversationPath)
            // console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        getUserConversation()
    }, [user]);

    // once the user login, add this user to the server
    useEffect(() => {
        if(user) {
            socket.emit("addThisUser", user.userID )
            socket.on('getAllUser', (users) => {
                console.log(users);
            })
        }
    }, [user]);
    
    return (
        <AppContext.Provider
            value="from app provider"
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}