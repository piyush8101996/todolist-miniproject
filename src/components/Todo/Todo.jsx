import style from './Todo.module.css'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../action/index';

export const Todo = ({list}) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);
  

  const handleCheked = () => dispatch(toggleTodo(list.id));

  useEffect(() => {
    setCheked(list.completed);
  }, [list]);

  return (
    <>
       <div className={style.todo}>
      <b className={style.text}>{list.data}</b>
      <button  className={list.completed ? `${style.done}`:style.donebtn} onClick={handleCheked} value={cheked}>Done</button>
      </div>

    </>
  )
}
export default Todo;