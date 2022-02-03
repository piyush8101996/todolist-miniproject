import AddTodo from "../AddTodo/AddTodo";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import VisiblityFilter from "../VisiblityFilter/VisiblityFilter";
import style from './Todoapp.module.css'

const TodoApp=()=>{
    return(
        <>
        <div className={style.bodys}>
        <Header/>
        <AddTodo/>
        <VisiblityFilter/>
        <TodoList/>
        </div>
          
        </>
    )
}
export default TodoApp;