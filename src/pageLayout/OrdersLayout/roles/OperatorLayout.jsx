import { getOrders } from '@/services/ordersService';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '@/components/AppHeader/AppHeader';
import OrderList from '../components/OrderList';
import { selectOrder, unselectOrder } from '@/redux/slices/orders.slice';

const OperatorLayout = () => {
    const dispatch = useDispatch();
    const { orders, selectedOrder, status } = useSelector(state => state.orders);

    const handleSelectOrder = (id) => {
        console.log(id);
        console.log(selectedOrder);
        console.log(selectedOrder?.id === id);
        if (selectedOrder?.id === id) {
            dispatch(unselectOrder())
        }
        else {
            dispatch(selectOrder(id))
        }
    }

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);
    return (
        <div>
            <AppHeader />
            <OrderList status={status} orders={orders} selectedOrder={selectedOrder} onOrderSelect={handleSelectOrder}/>
        </div>
    )
}

export default OperatorLayout;