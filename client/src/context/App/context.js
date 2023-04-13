import { 
    useContext, 
    createContext, 
    useState, 
    useEffect,
    useRef 
} from 'react';
import { io } from 'socket.io-client';
const socket = io('http://localhost:8080/')
const AppContext = createContext();

export const AppProvider = ({ children }) => {

    useEffect(() => {
        socket.on('connect_error', (err) => {
            console.log('connect_err due to ' + '' + err.message);
        })
    }, []);
    return (
        <AppContext.Provider
            value="from app provider"
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}