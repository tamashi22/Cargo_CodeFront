import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';



const OrdersSidebar = () => {
    return (
        <div className={styles.sidebar}>
            {
                SIDEBAR_NAVS.map((nav, index) => (
                    <Link 
                        key={index} 
                        className={clsx(styles.sidebar_nav, index === activeNav && styles.active_sidebar_nav)} 
                        href={nav.path}>
                            {nav.title}
                    </Link>
                ))
            }
        </div>
    );
}

export default OrdersSidebar;