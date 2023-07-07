import clsx from 'clsx';
import { useEffect, useState } from 'react';
import DialogChat from '../DialogChat';
import DialogMap from '../DialogMap';
import DialogOrderDetail from '../DialogOrderDetails';
import styles from './style.module.scss';

const mockOrder = {
	"id": 4,
	"created_at": "2023-07-03T08:03:39.806Z",
		"price": 4750,
		"currency": "usd",
		"pickup_location": "Los Angeles",
		"destination": "New York",
		"pickup_date": "2023-07-03",
		"delivery_date": "2023-07-03",
		"weight": 88000,
		"type": "Metal",
		"required_equipment": null,
		"special_instructions": null,
		"status": "finished",
		"active": true,
		"acceptance_image": null,
		"shipper": {
			"id": 6,
			"billing_address": "New York St. Norway 13"
		},
		"carrier": {
			"id": 5,
			"physical_address": "New York St. Norway 13",
			"mc_dot_number": "5432167890"
		}
}

const DialogContent = ({order}) => {
    const [activeNav, setActiveNav] = useState('order_details');
    const handleSetActiveNav = (value) => {
        setActiveNav(value);
    }

    useEffect(() => {
        setActiveNav('order_details');
    }, [order]);

    return(
        <>
        <div className={styles.dialog_header}>
            <button 
                type="button"
                onClick={() => handleSetActiveNav('order_details')}
                className={clsx(styles.header_nav, activeNav === 'order_details' && styles.active_nav)}>Order details</button>
            <button 
                type="button"
                onClick={() => handleSetActiveNav('chat')}
                className={clsx(styles.header_nav, activeNav === 'chat' && styles.active_nav)}>Chat</button>
            <button 
                type="button"
                onClick={() => handleSetActiveNav('map')}
                className={clsx(styles.header_nav, activeNav === 'map' && styles.active_nav)}>Map</button>
        </div>
        <div className={styles.dialog_content}>
            {
                activeNav === 'order_details' &&
                <DialogOrderDetail order={mockOrder} />
            }
            {
                activeNav === 'map' &&
                <DialogMap />
            }
            {
                activeNav === 'chat' &&
                <DialogChat orderId={order} />
            }
        </div>
        </>
    );
};

export default DialogContent;