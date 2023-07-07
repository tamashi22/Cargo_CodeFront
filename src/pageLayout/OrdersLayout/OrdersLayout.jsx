
import { useSelector } from 'react-redux';
import OperatorLayout from './roles/OperatorLayout';
import ShipperLayout from './roles/ShipperLayout';

const ROLES_LAYOUT = {
    'OPERATOR': <OperatorLayout />,
    'SHIPPER': <ShipperLayout />
}

const OrdersLayout = () => {
  const { user } = useSelector(state => state.auth);
  return (ROLES_LAYOUT[user?.role]);
};

export default OrdersLayout;
