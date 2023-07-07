import Button from '@/components/ui/AppButton';
import { CURRENCY } from '@/constants/currency';
import dayjs from 'dayjs';
import styles from './style.module.scss';



const SelectedOrder = ({ order, onOffer }) => {
    return(
        <div className={styles.order_holder}>
            <div className={styles.info_holder}>
                <p><b>Company:</b> {order.shipper.name}</p>
                <p><b>Origin:</b> {order.pickup_location}</p>
                <p><b>Destination:</b> {order.destination}</p>
            </div>
            <div className={styles.info_holder}>
                <p><b>Contact:</b> {order.shipper?.billing_address}</p>
                <p><b>Pickup date:</b> {dayjs(order.pickup_date).format('DD/MM/YYYY')}</p>
                <p><b>Delivery date:</b> {dayjs(order.delivery_date).format('DD/MM/YYYY')}</p>
            </div>
            <div className={styles.info_holder}>
                <p><b>Type of good:</b> {order.type}</p>
                <p><b>Weight:</b> {order.weight}</p>
                <p><b>Length:</b> {order.lenght}</p>
            </div>
            <div className={styles.accept_order_holder}>
                <div className={styles.accept_order_inner}>
                    <p><b>Price:</b> {order.price}{CURRENCY[order.currency]}</p>
                </div>
            </div>
        </div>
    )
};

export default SelectedOrder;