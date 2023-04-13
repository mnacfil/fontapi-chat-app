import { 
    useContext, 
    createContext, 
    useState, 
    useEffect,
} from 'react';
import { serverBaseUrl } from '../../util/axios';
import { conversationPath, usersPath } from '../../util/constant';
import { getChattedUsers } from '../../util/AppContextHelper'
import { useAccountContext } from '../Account/context'

import { io } from 'socket.io-client';
const socket = io('http://localhost:8080/');

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [userConversation, setUserConversation] = useState([]);
    const { user } = useAccountContext();
    const [chattedUsers, setChattedUsers] = useState([]);
    const [dbUsers, setDbUsers] = useState([]);

    useEffect(() => {
        socket.on('connect', (err) => {
            socket.emit('hello', 'hello from client')
        })
    }, []);

    const getUserConversation = async() => {
        try {
            const response = await serverBaseUrl.get(conversationPath)
            const data = getChattedUsers(response.data.data, user.userID)
            setChattedUsers(data);
            setUserConversation(response.data.data)
        } catch (error) {
            console.log(error);
        }   
    }

    const getAllUser = async() => {
        try {
            const response = await serverBaseUrl.get(usersPath);
            setDbUsers(response.data.data)
        } catch (error) {
            console.log(error);
        }   
    }
    const getUser = async(id) => {
        try {
            const response = await serverBaseUrl.get(`${usersPath}/${id}`);
            return response.data.data;
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        getUserConversation()
        getAllUser();
    }, [user]);

    // once the user login, add this user to the server
    useEffect(() => {
        if(user) {
            socket.emit("addThisUser", user.userID )
            socket.on('getAllUser', (users) => {
                // console.log(users);
            })
        }
    }, [user]);
    
    return (
        <AppContext.Provider
            value={{
                chattedUsers,
                dbUsers
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}