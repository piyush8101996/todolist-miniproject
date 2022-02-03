import { combineReducers } from '@reduxjs/toolkit';
import { todoReducer } from './todoreducer';
import { loginReducer } from './loginreducer';
import{visibilityFilterReducer} from './visiblityfilterreducer'

export const reducer = combineReducers({
    todoReducer,
    loginReducer,
    visibilityFilterReducer,
    
});