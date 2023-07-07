import clsx from 'clsx';
import styles from './style.module.scss';

const Message = ({myId, message}) => {
    return(
        <div className={clsx(styles.message_holder, message.authorId === myId ? styles.right_message : styles.left_message)}>
            <div className={styles.message}>
                <p>{message.text}</p>
            </div>
        </div>
    );
};
export default Message;