export const deletetodo=(id)=>{
    return{
        type:'DELETE',
         id
    }
}

export const donetodo=(id)=>{
    return{
        type:'DONE',
         id

    }
}
export const addlist=(input)=>{
    return{
        type:'ADD_LIST',
        payload:{ 
            id:Math.floor(Math.random() * 1000),
            data:input
        }
    }
}
export const logindata=(username,password)=>{
    return{
        type:'LOGIN',
        payload:{
            username:username,
            password:password
        }
    }
}
export const logout=()=>{
    return{
        type:'LOGOUT'
    }
}
export const toggleTodo = id => ({
    type: 'TOGGLETODO',
      id 
  });
  
  export const setFilter = filter => ({
    type: 'SETFILTER',
    payload: { filter }
  });

    