import { useState } from 'react';
function TodoForm(props) {
    const onAdd = props.onAdd
    const [text,setText] = useState('')
    const handleSubmit = (e) => {
        // 阻止表单的默认行为
        // 由js 来控制S
        e.preventDefault();//event api
        // console.log(text);
        onAdd(text) 
        // todos? 打报告
    }

    const handleChange = (e) => {
        // 数据驱动界面
        setText(e.target.value)
    }
    return (
        <form action="http://www.baidu.com" onSubmit={handleSubmit}>
            <input 
                 type="text" 
                 placeholder="请输入待办事项" 
                 value={text}
                 onChange={handleChange}
            />
            <button type="submit">添加</button>
        </form>
    )

}

export default TodoForm;