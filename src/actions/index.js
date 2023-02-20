export const setTrue=()=>{
    return {
        type:"SET_TRUE",
    }
}

export const setFalse=()=>{
    return {
        type:"SET_FALSE",
    }
}

export const setWpm=(val)=>{
    return{
        type:"SET_WPM",
        paylod:val
    }
}

export const setAccuracy=(val)=>{
    return {
        type:"SET_ACCURACY",
        Accuracy:val
    }
}