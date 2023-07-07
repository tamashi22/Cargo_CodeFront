import CurrentOrderContainer from '@/pageLayout/OrdersLayout/components/CurrentOrderContainer';
import OrdersHeader from '../OrdersHeader';
import styles from './style.module.scss';

const CurrentOrder = () => {
    return(
        <div className={styles.content}>
            <OrdersHeader />
            <CurrentOrderContainer />
        </div>
    )
};
export default CurrentOrder;