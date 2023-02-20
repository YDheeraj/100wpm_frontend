const initialdata=false;


export const truefalse=(state=initialdata,action)=>{
    switch(action.type){
        case "SET_TRUE" :return state=true;
        case "SET_FALSE":return state=false;
        default :return state;
    }
}

var wpmdata=0;
export const setWpm=(state=wpmdata,action)=>{
    switch(action.type){
        case"SET_WPM":return wpmdata=action.paylod;
        default : return wpmdata;
    }
}

var Accuracy=0;
export const setAccuracy=(state=Accuracy,action)=>{
    switch(action.type){
        case"SET_ACCURACY": return Accuracy=action.Accuracy;
        default: return Accuracy;
    }
}


