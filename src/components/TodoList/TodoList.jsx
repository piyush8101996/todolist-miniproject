import { useDispatch, useSelector } from "react-redux";
import { deletetodo, } from "../../action";
import { getTodosByVisibilityFilter } from "../../reducer/selector";
import style from './Todolist.module.css'
import  Todo  from "../Todo/Todo";

const TodoList = () => {
  
  const { todoReducer, visibilityFilterReducer } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todoReducer,visibilityFilterReducer);
    
  const dispatch = useDispatch()

    return (
        <>
          {filterTodos.length ? filterTodos.map(list => (
            <li className={style.list} key={`list-${list.id}`}>
            <Todo list={list} />
            <button className={style.btn} onClick={() => dispatch(deletetodo(list.id))}> Delete</button>
            </li>
           

          )) : <b  >No Todos Yay!</b>}
        </>
      )
}
    

export default TodoList;