import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { client } from "@/utils/socket";
import { addOrder, setAllMessage } from '@/redux/slices/orders.slice';

const AppSocketProvider = ({children}) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        client.on('connect', () => {
            console.log('Socket connected');
        });

        client.on('disconnect', () => {
        console.log('Disconnected: ', )
        });

        /**
         * Order synchronization
         */
        client.on('orders:create-order', (order) => {
            dispatch(addOrder(order));
        });

        client.on('orders:receive-room-messages', (messages) => {
            console.log('Messages: ', messages);
            dispatch(setAllMessage(messages));
        });

        client.on('order:receive-message', (message) => {
            
        });
    }, []);

    return children;
}

export default AppSocketProvider;