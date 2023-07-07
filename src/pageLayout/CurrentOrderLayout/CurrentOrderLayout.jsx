const { AppHeader } = require("@/components/AppHeader")
import styles from './style.module.scss';

const CurrentOrderLayout = () => {
    return (
        <>
            <AppHeader />
            <div className={styles.content}>
                <OrdersSidebar />
                <div>History of orders</div>
            </div>
        </>
    )
};

export default CurrentOrderLayout;