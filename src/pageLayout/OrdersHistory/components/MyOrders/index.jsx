import { CURRENCY } from '@/constants/currency';
import clsx from 'clsx';
import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import SelectedOrder from '../SelectedOrder';
import styles from './style.module.scss';

const STATUS_CLASSES = {
    'waiting': 'waiting_status',
    'finished': 'finished_status',
    'on_way': 'on_way_status',
    'canceled': 'canceled_status',
    'accepted': 'accepted_status'
}

const MyOrders = ({ orders = [], selectedOrder, onOrderSelect}) => {
    const [filter, setFilter] = useState(null);
    return (
        <div className={styles.table_holder}>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                            <button>⏏</button>
                        </th>
                        <th>
                            Origin
                            <button>⏏</button>
                        </th>
                        <th>
                            Destination
                            <button>⏏</button>
                        </th>
                        <th>
                            Pickup date
                            <button>⏏</button>
                        </th>
                        <th>
                            Delivery date
                            <button>⏏</button>
                        </th>
                        <th>
                            Equipment
                            <button>⏏</button>
                        </th>
                        <th>
                            Price
                            <button>⏏</button>
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((item, index) => (
                            <React.Fragment key={index}>
                                <tr 
                                    onClick={() => onOrderSelect(item.id)}
                                    className={clsx(index === 0 && styles.fade_in_row, selectedOrder?.id === item.id && styles.row_shadow)}>
                                        <td className={clsx(index % 2 && styles.odd)}>{item.id}</td>
                                        <td className={clsx(index % 2 && styles.odd)}>{item.pickup_location}</td>
                                        <td className={clsx(index % 2 && styles.odd)}>{item.destination}</td>
                                        <td className={clsx(index % 2 && styles.odd)}>{dayjs(item.pickup_date).format('DD/MM/YYYY')}</td>
                                        <td className={clsx(index % 2 && styles.odd)}>{dayjs(item.delivery_date).format('DD/MM/YYYY')}</td>
                                        <td className={clsx(index % 2 && styles.odd)}>{item.required_equipment ? 'YES' : 'NO'}</td>
                                        <td className={clsx(index % 2 && styles.odd)}>{item.price}{CURRENCY[item.currency]}</td>
                                        <td className={clsx(index % 2 && styles.odd)}>
                                            <span className={styles[STATUS_CLASSES[item.status]]}>{item.status}</span>
                                        </td>
                                </tr>
                                {
                                    selectedOrder?.id === item.id &&
                                    <tr className={clsx(styles.selected_row, index % 2 && styles.odd_selected_row)}>
                                        <td colSpan={8}>
                                            <SelectedOrder order={selectedOrder} />
                                        </td>
                                    </tr>
                                }
                            </React.Fragment>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
};

export default MyOrders;