import styles from './toast.module.css'
import {
    useState,
    useEffect
}from 'react'
import { toastEvents } from './toastController';

const Toast =(props) => {
    const [visible,setVisible] = useState(true)
    const [data,setData] = useState({
        user: 0,
        bell:0,
        mail:0
    })
    useEffect(()=> {
        const show = (info) =>{
            setVisible(true);
            setData(info);  
            setTimeout(() => setVisible(false),3000)
        }
        // toastEvents 是mitt 的实例
        // 自定义事件 show是自定义事件的名字
        // on 监听一个事件
        // 订阅了show 的事件，订阅者
        toastEvents.on('show',show);
        return () => toastEvent.off('show',show)
    },[])
    // 等着通信的到来
    if (!visible) return null;
    return(
        <div className={styles.toastWrapper}>
                <div className={styles.toastItem}>👤 {data.user}</div>
                <div className={styles.toastItem}>🔔 {data.bell}</div>
                <div className={styles.toastItem}>✉ {data.mail}</div>
                <div className={styles.toastArrow}></div>
        </div>
    )
    
}

export default Toast;   