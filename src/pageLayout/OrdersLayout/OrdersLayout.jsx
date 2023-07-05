
import OperatorLayout from './roles/OperatorLayout';
import ShipperLayout from './roles/ShipperLayout';

const ROLES_LAYOUT = {
    'OPERATOR': <OperatorLayout />,
    'SHIPPER': <ShipperLayout />
}

const OrdersLayout = () => {
    const role = 'SHIPPER'
    return (ROLES_LAYOUT[role]);
};

export default OrdersLayout;