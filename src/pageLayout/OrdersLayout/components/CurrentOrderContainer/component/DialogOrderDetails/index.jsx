import { CURRENCY } from '@/constants/currency';
import dayjs from 'dayjs';
import styles from './style.module.scss';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const DialogOrderDetail = ({order}) => {
    return(
        <div className={styles.order_details}>
            <div className={styles.info_column}>
                <div className={styles.column_row}>
                    <p><b>Order information</b></p>
                </div>
                <div className={styles.column_row}>
                    <p style={{fontWeight: 500}}>Carrier:</p>
                    <p>{order.carrier?.physical_address}</p>
                </div>
                <div className={styles.column_row}>
                    <p style={{fontWeight: 500}}>Origin:</p>
                    <p>{order.pickup_location}</p>
                </div>
                <div className={styles.column_row}>
                    <p style={{fontWeight: 500}}>Destination:</p>
                    <p>{order.destination}</p>
                </div>
                <div className={styles.column_row}>
                    <p style={{fontWeight: 500}}>Pickup date:</p>
                    <p>{dayjs(order.pickup_date).format('DD/MM/YYYY')}</p>
                </div>
                <div className={styles.column_row}>
                    <p style={{fontWeight: 500}}>Delivery date:</p>
                    <p>{dayjs(order.delivery_date).format('DD/MM/YYYY')}</p>
                </div>
            </div>
            <div className={styles.info_column} style={{width: '30%'}}>
                <div className={styles.column_row}>
                    <p><b>Order information</b></p>
                </div>
                <div className={styles.column_row}>
                    <p style={{fontWeight: 500}}>MC/Dot Number:</p>
                    <p>{order.carrier?.mc_dot_number}</p>
                </div>
                <div className={styles.column_row}>
                    <p style={{fontWeight: 500}}>Physical Address:</p>
                    <p>{order.carrier?.physical_address}</p>
                </div>
            </div>
            <div className={styles.info_column} style={{width: '20%'}}>
                <div className={styles.column_row}>
                    <p><b>Total</b></p>
                </div>
                <div className={styles.column_row}>
                    <p><b>Status:</b></p>
                    <p>{capitalize(order.status)}</p>
                </div>
                <div className={styles.column_row}>
                    <p><b>Price:</b></p>
                    <p>{order.price + CURRENCY[order.currency]}</p>
                </div>
            </div>
        </div>
    );
}

export default DialogOrderDetail;