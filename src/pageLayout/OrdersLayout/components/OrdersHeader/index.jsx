import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const ORDERS_HEADER_NAVS = [
    {title: 'Current order', path: '/orders'},
    {title: 'History of orders', path: '/orders/history'}
]

const OrdersHeader = () => {
    const router = useRouter();
    const [activeNav, setActiveNav] = useState(-1);
    
    useEffect(() => {
        const index = ORDERS_HEADER_NAVS.findIndex((nav) => nav.path === router.route);
        setActiveNav(index);
    }, [router])

    return (
        <div className={styles.orders_header}>
            {
                ORDERS_HEADER_NAVS.map((nav, index) => (
                    <Link 
                        key={index} 
                        className={clsx(styles.nav, index === activeNav && styles.active_nav)}
                        href={nav.path}>
                            {nav.title}
                    </Link>
                ))
            }
        </div>
    )
};

export default OrdersHeader;