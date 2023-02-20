import { truefalse,setAccuracy,setWpm } from "./typingtestReducer";


import {combineReducers} from "redux";

const rootReducer=combineReducers({
    truefalse,setWpm,setAccuracy

})

export default rootReducer