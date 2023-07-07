import { AppHeader } from "@/components/AppHeader/AppHeader";
import { useDispatch, useSelector } from "react-redux";
import CurrentOrder from "../components/CurrentOrder";

const ShipperLayout = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders);
    return (
        <>
            <AppHeader />
            <CurrentOrder />
        </>
    );
}

export default ShipperLayout;