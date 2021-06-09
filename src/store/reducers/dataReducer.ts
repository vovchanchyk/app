import { GETDATA } from "../types";



export type TBlock = {
    blockId:string;
    baker:string;
    created:string;
    number_of_operations:number;
    volume:number;
    fees:number;
   

}
export type TBlockPayload = TBlock[];
export type TBlockAction = {
    type:string;
    payload:TBlockPayload
}
const innitialState:TBlockPayload|any[] = []

function dataReducer(state = innitialState,action:TBlockAction) {
   if(action.type === GETDATA){
       let copy = action.payload;
       return copy
   }
   
    return state;

}

export default dataReducer;