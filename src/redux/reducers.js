// import {SET_USER_NAME , SET_USER_AGE , INCREASE_AGE} from './action';
import {SET_TASK,SET_TASK_ID,SET_REGISTER, SET_LOGOUT, SET_LOGIN} from './action';

const initialState = {
    tasks: [],
    taskID: 1,
    isLoading: true,
    userName : null,
    userToken: null
}

function taskReducer(state = initialState , action){
    switch(action.type){
        case SET_TASK:
            return {...state,tasks: action.payload}
      case SET_TASK_ID:
            return {...state, taskID : action.payload}
    case SET_LOGIN:
            return [...state, {isLoading : false, userToken:action.payload, userName: action.payload}]
    case SET_LOGOUT:
            return [...state, {isLoading : false, userToken:null , userName:null}]  
    case SET_REGISTER:
            return [ ...state, {isLoading : false, userToken:action.payload, userName: action.payload}]           
         default:
             return state;
    }

// function userReducer(state = initialState , action){
//       switch(action.type){
//           case SET_USER_NAME:
//               return {...state,name: action.payload}
//           case SET_USER_AGE:
//               return {...state, age : action.payload}
//         case INCREASE_AGE:
//                 return {...state, age : state.age +1}
//            default:
//                return state;
//       }
}

export default taskReducer;