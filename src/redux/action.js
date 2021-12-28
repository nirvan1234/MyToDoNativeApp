// export const SET_USER_NAME = 'SET_USER_NAME';
// export const SET_USER_AGE = 'SET_USER_AGE';
// export const INCREASE_AGE = "INCREASE_AGE";
export const SET_TASK = 'SET_TASK';
export const SET_TASK_ID = 'SET_TASK_ID';

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