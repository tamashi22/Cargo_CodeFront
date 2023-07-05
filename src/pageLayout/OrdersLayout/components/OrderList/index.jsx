import { CURRENCY } from '@/constants/currency';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useState } from 'react';
import styles from './style.module.scss';

const OrderList = ({status, orders = [], onOrderSelect}) => {
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
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((item, index) => (
                            <tr 
                                key={item.id} 
                                className={index === 0 ? styles.fade_in_row : ''}
                                onClick={() => onOrderSelect(item.id)}>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}>{item.id}</td>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}>{item.pickup_location}</td>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}>{item.destination}</td>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}>{dayjs(item.pickup_date).format('DD/MM/YYYY')}</td>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}>{dayjs(item.delivery_date).format('DD/MM/YYYY')}</td>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}>{item.required_equipment ? 'YES' : 'NO'}</td>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}>{item.price}{CURRENCY[item.currency]}</td>
                                    <td style={{background: index%2 ? 'rgb(240, 240, 240)' : 'none'}}><button>Offer to carriers</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}
export default OrderList;