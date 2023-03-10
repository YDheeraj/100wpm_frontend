import { truefalse,setAccuracy,setWpm,setUser,setEmail,setRow,setCol} from "./typingtestReducer";


import {combineReducers} from "redux";

const rootReducer=combineReducers({
    truefalse,setWpm,setAccuracy,setUser,setEmail,setRow,setCol

})

export default rootReducer