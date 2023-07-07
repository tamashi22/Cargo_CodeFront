import dynamic from 'next/dynamic';
import styles from './style.module.scss';

const Map = dynamic(() => import('../../../../../../components/TrimbleMap/TrimbleMap'), {
    loading: () => "Loading...",
    ssr: false,
});

const DialogMap = () => {
    return(
        <div className={styles.map_holder}>
            <Map className={styles.map}/>
        </div>
    )
}

export default DialogMap;