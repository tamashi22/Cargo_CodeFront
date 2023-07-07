import dynamic from 'next/dynamic';
import styles from './style.module.scss';

const Map = dynamic(() => import('../../../../../../components/TrimbleMap/TrimbleMap'), {
    loading: () => "Loading...",
    ssr: false,
});

const DialogMap = ({order}) => {
    const start = {
        origin_latitude: order.origin_latitude,
        origin_longitude: order.origin_longitude
    };
    const end = {
        destination_latitude: order.destination_latitude,
        destination_longitude: order.destination_longitude
    }
    return(
        <div className={styles.map_holder}>
            <Map 
                start={start}
                end={end}
                className={styles.map}/>
        </div>
    )
}

export default DialogMap;