// import { setAllMessage } from '@/redux/slices/orders.slice';
import { setMessage } from '@/redux/slices/orders.slice';
import { client } from '@/utils/socket';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Message';
import styles from './style.module.scss';


const DialogChat = ({orderId}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { user } = useSelector(state => state.auth);
    const { myOrders } = useSelector(state => state.orders);
    const order = myOrders.find(item => item.id === orderId)

    const handleSubmitMessage = (e) => {
        let isSent = false;
        e.preventDefault();
        if (text === '') {
            return;
        }
        if (!isSent) {
            const message = {text, orderId, authorId: user.id};
            client.volatile.emit('orders:send-message', message);
            dispatch(setMessage({data: {...message, author: {id: user.id}}, orderId}));
            isSent = true;
        }
        setText('');
    }
    
    const handleTextChange = ({target}) => {
        setText(target.value);
    }
    
    useEffect(() => {
        client.emit('orders:get-room-messages', {orderId, userId: 6});
    }, [client])

    return (
        <div className={styles.chat_holder}>
            <div className={styles.dialog_holder}>
                <div>
                    {
                        order?.chat && order.chat.map((message) => (<Message key={message.id} message={message} myId={1}/>))
                    }
                </div>
            </div>
            <form className={styles.message_send_block} onSubmit={handleSubmitMessage}>
                <div className={styles.input_holder}>
                    <input value={text} onChange={handleTextChange}/>
                </div>
                <div className={styles.submit_button_holder}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default DialogChat;