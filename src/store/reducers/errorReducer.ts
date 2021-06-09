import { ERROR } from "../types";




export type TErrorAction = {
    type:string;
   
}


function errorReducer(state = false,action:TErrorAction) {
   if(action.type === ERROR ){
       
       return true
   }
   
    return state;

}

export default errorReducer;