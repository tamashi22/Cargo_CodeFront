import { AppHeader } from "@/components/AppHeader";
import { selectMyOrder, unselectMyOrder } from "@/redux/slices/orders.slice";
import { getMyOrdersApi } from "@/services/ordersService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrdersHeader from "../OrdersLayout/components/OrdersHeader";
import MyOrders from "./components/MyOrders";
import styles from './style.module.scss';

const OrdersHistoryLayout = () => {
    const dispatch = useDispatch();
    const { myOrders, selectedMyOrder } = useSelector(state =>state.orders);
    useEffect(() => {
        dispatch(getMyOrdersApi());
    }, []);

    const handleSelectOrder = (id) => {
        if (selectedMyOrder?.id !== id) {
            dispatch(selectMyOrder(id));
        }
        else {
            dispatch(unselectMyOrder())
        }
    }
    return (
        <>
            <AppHeader />
            <div className={styles.content}>
                <OrdersHeader />
                <MyOrders 
                    orders={myOrders} 
                    selectedOrder={selectedMyOrder}
                    onOrderSelect={handleSelectOrder}/>
            </div>
        </>
    )
};
export default OrdersHistoryLayout;