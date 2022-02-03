import { useState } from "react";
import {  useDispatch } from 'react-redux';
import { addlist } from "../../action";
import style from './Addtodo.module.css'


const AddTodo=()=>{
    const [input,setInput]=useState('')

    const onchangeHandler=(event)=>{
        setInput(event.target.value)
    }

    const dispatch=useDispatch();
 
    
    return(
        <>
        <div className={style.add}>
        <input className={style.inputbox} type="text" placeholder="Enter the Task"
        value={input}
        onChange={onchangeHandler} />
        <button className={style.buttonst} onClick={()=>dispatch(addlist(input),setInput(''))}>Add Task</button>
        </div>
        </>
    )
}
export default AddTodo;