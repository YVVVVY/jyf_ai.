import{
    useTodoStore
}from '../../store/todos'
const TodoList = () => {
    const {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
    } = useTodoStore()
    
    return (
        <div>
            
        </div>
    )
}

export default TodoList