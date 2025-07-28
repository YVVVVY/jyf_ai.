import Style from './loading.module.css'
import {memo} from 'react'

const Loading = () => {
    return (
        <div className={Style.wrapper}>
           <div></div>
           <div></div>
        </div>
    )
}

export default memo(Loading)