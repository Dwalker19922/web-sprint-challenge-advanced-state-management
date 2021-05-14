import axios from 'axios';


export const FETCH_START="FETCH_START"
export const FETCH_SUCCESS="FETCH_SUCCESS"
export const FETCH_FAIL ="FETCH_FAIL"
export const ADD_SMURF="ADD_SMURF"
export const SET_FETCH_ERROR="SET_FETCH_ERROR"
export const PROFILE_TRUE="PROFILE_TRUE"



export const fetchStart=()=>{
    return({type:FETCH_START, payload:true})
}

export const fetchSuccess=(smurfData)=>{
    return({type:FETCH_SUCCESS, payload:smurfData})
}

export const fetchFail=(error)=>{
    return({type:FETCH_FAIL, payload:error})
}



export const fetchSmurfs =()=>{
    return(dispatch=>{
    dispatch({type:FETCH_START});
    dispatch(fetchStart());
    axios.get( `http://localhost:3333/smurfs`)
    .then((response)=>{
        dispatch(fetchSuccess(response.data))
    })
    .catch((error)=>{
        dispatch(fetchFail(error))   
    })
})
}


export const addSmurf=(newSmurf)=>{
    const randomN=Math.floor(Math.random() * 101) *Math.floor(Math.random() * 101)
    return({type:ADD_SMURF,payload:newSmurf,id:randomN})
}
export const setError=(value)=>{
    return({type:SET_FETCH_ERROR,payload:value})
}
export const setProfile=(boolean)=>{
    return({type:PROFILE_TRUE,payload:boolean})
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.*
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)*
//3. Add a standard action that allows us to set the value of the error message slice of state.*