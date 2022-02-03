const intialdata={
    logedin:false
}

export const loginReducer=(state=intialdata,action)=>{

    switch(action.type){
        case 'LOGIN':
            const {username,password}=action.payload
            if(username.trim() && password.trim()){
                return{
                    ...state,
                    logedin:{
                        logedin:true,
                        
                        username:action.payload.username
                    }
                    
                }
            } 
            else{
                return{
                    ...state,
                    logedin:{
                        logedin:false,
                        loginfail:true
                    }
                }
            } 
        case 'LOGOUT':
           return{
                ...state,
                logedin:{
                    logedin:false
                }
           }    
        default: return state;
    }
}