import { 
    useContext, 
    createContext, 
    useState, 
    useEffect,
} from 'react';
import { serverBaseUrl } from '../../util/axios';
import { conversationPath, usersPath, messagePath } from '../../util/constant';
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
    const [myMessage, setMyMessage] = useState('');
    const [currentChat, setCurrentChat] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const [messages, setMessages] = useState([]);
    const [chatMateUser, setChatMateUser] = useState(null);

    const receiverID = currentChat?.userInvolve.filter(item => item !== user.userID)[0];
    console.log(receiverID);

    useEffect(() => {
        socket.on('connect', (err) => {
            socket.on('receiveMessage', ({ senderID, message }) => {
                setReceiveMessage({
                    sender: senderID,
                    message,
                    receivedAt: Date.now()
                })
            })
        })
    }, []);

    // everytime user receiver a message,and different chatmate
    useEffect(() => {
        // since on initial render receiveMessage is null, 
        if(receiveMessage) {
            // if the receive message is coming to one im currently chatting.
            if(currentChat?.userInvolve.includes(receiveMessage.sender)) {
                setMessages(prevMessages => [...prevMessages, receiveMessage]);
            }
        }
    }, [receiveMessage, currentChat])

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

    const getChatMateUser = async(id) => {
        try {
            const response = await serverBaseUrl.get(`${usersPath}/${receiverID}`);
            setChatMateUser(response.data.data)
        } catch (error) {
            console.log(error);
        }   
    }

    // get the messages from current chatmate
    const getMessages = async() => {
        try {
            const response = await serverBaseUrl.get(`${messagePath}/${currentChat?._id}`);
            setMessages(response.data.data)
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        getChatMateUser();
        getMessages();
    }, [currentChat]);

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Submiting");
        const messageBody = {
            message: myMessage,
            conversationId: currentChat._id
        }

        socket.emit('sendMessage', {
            senderID: user.userID,
            receiverID,
            message: myMessage
        });

        try {
            const response = await serverBaseUrl.post(messagePath, messageBody);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <AppContext.Provider
            value={{
                chattedUsers,
                dbUsers,
                myMessage,
                messages,
                currentChat,
                chatMateUser,
                setMyMessage,
                setCurrentChat,
                handleSubmit,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}