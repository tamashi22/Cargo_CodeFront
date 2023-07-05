import { AppHeader } from "@/components/AppHeader/AppHeader";
import { useDispatch, useSelector } from "react-redux";

const ShipperLayout = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders);
    return (
        <div>
            <AppHeader />
            
        </div>
    );
}

export default ShipperLayout;