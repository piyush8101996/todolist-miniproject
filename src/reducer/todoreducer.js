const intialdata = {
    list: []
}
export const todoReducer = (state = intialdata, action) => {
   
    switch (action.type) {
        case 'ADD_LIST':
            const{id,data}=action.payload
            if(data.trim()){
                return {
                    ...state,
                    list: [
                        ...state.list,
                        { 
                            id:id,
                            data:data,
                            completed:false, 
                        }
                    ]
                };
            }
           

        case 'DELETE':
            
            const newlist=state.list.filter((elem)=>elem.id !== action.id)
        
            return{
                ...state,
                list:newlist
            };
        

        case 'TOGGLETODO': 
                    const  ids  = action.id;
                    const todost = state.list.map(obj => obj.id === ids ? { ...obj, completed: !obj.completed } : obj);
                    return { list:todost }
        
        default: return state;
    };
};