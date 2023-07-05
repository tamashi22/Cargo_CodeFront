import { getOrders } from '@/services/ordersService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '@/components/AppHeader/AppHeader';
import OrderList from '../components/OrderList';
import { selectOrder } from '@/redux/slices/orders.slice';
import SelectedOrder from '../components/SelectedOrder/inidex';

const OperatorLayout = () => {
    const dispatch = useDispatch();
    const { orders, selectedOrder, status } = useSelector(state => state.orders);

    const handleSelectOrder = (id) => {
        dispatch(selectOrder(id))
    }

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);
    return (
        <div>
            <AppHeader />
            {selectedOrder && <SelectedOrder order={selectedOrder}/>}
            <OrderList status={status} orders={orders} onOrderSelect={handleSelectOrder}/>
        </div>
    )
}

export default OperatorLayout;