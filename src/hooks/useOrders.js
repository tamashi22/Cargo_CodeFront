import { getOrders } from "@/services/ordersService";
import { useEffect, useState } from "react";

export const useOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(async() => {
        getOrders();
    }, []);
    return {
        orders
    };
}