import { getMyOrdersApi } from '@/services/ordersService';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DialogContent from './component/DialogContent';
import styles from './style.module.scss';

const MOCH = [
    {id: 0, name: 'Order row'},
    {id: 1, name: 'Order row'},
    {id: 2, name: 'Order row'},
    {id: 3, name: 'Order row'},
    {id: 4, name: 'Order row'},
]

const CurrentOrderContainer = () => {
    const dispatch = useDispatch();
    const { myOrders } = useSelector(state => state.orders);
    const [openOrder, setOpenOrder] = useState(MOCH[0].id);
    const handleOrderRowClick = (id) => {
        setOpenOrder(id);
    }

    useEffect(() => {
        dispatch(getMyOrdersApi());
    }, [])

    return (
        <div className={styles.dialog_container}>
            <div className={styles.dialog_sidebar}>
                <div className={styles.sidebar_header}>
                    <p>Active orders</p>
                </div>
                <div className={styles.sidebar_rows}>
                    {
                        myOrders.filter((item) => item.status !== 'finished').map((row) => (
                            <button
                                key={row.id}
                                    onClick={() => handleOrderRowClick(row.id)}
                                    className={clsx(styles.order_row, openOrder === row.id && styles.active_order_row)}>
                                    <p><b>Origin:</b> {row.pickup_location}</p>
                                    <p><b>Destination:</b> {row.destination}</p>
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className={styles.dialog_content}>
                {
                    openOrder > -1 &&
                    <DialogContent order={openOrder} />
                }
            </div>
        </div>
    );
};

export default CurrentOrderContainer;