// export const SET_USER_NAME = 'SET_USER_NAME';
// export const SET_USER_AGE = 'SET_USER_AGE';
// export const INCREASE_AGE = "INCREASE_AGE";
export const SET_TASK = 'SET_TASK';
export const SET_TASK_ID = 'SET_TASK_ID';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_REGISTER = 'SET_REGISTER';

export const setTasks = tasks => dispatch =>{
    dispatch({
        type: SET_TASK,
        payload: tasks
    })

}

export const setTaskID = taskID => dispatch =>{
    dispatch({
        type: SET_TASK_ID,
        payload: taskID
    })

}

export const setLogin = (data) => dispatch =>{
    dispatch({
        type: SET_LOGIN,
        payload: data
    })

}

export const setLogout = (data) => dispatch =>{
    dispatch({
        type: SET_LOGOUT,
        payload: data
    })

}

export const setRegister = (data) => dispatch =>{
    dispatch({
        type: SET_REGISTER,
        payload: data
    })

}

// export const setName = name => dispatch =>{
//     dispatch({
//         type: SET_USER_NAME,
//         payload: name
//     })

// }

// export const setAge = age => dispatch =>{
//   dispatch({
//       type: SET_USER_AGE,
//       payload: age
//   })
// }

// export const setIncrease = age=> dispatch =>{
//     dispatch({
//         type: INCREASE_AGE,
//         payload: age
//     })
//   }