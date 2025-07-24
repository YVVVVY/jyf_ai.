import {
    useEffect,
    memo
}from 'react'
const Button = ({count}) => {
    useEffect(() => {
        console.log('Button reander');
    },[count]);
    console.log('Button reander');
    return (
        <button> 
            {count}Click Me
        </button>
    )
}
// 高阶组件
export default memo(Button)