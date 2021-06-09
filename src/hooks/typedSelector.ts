import { TypedUseSelectorHook, useSelector } from "react-redux";
import {  rootReducerType } from "../store/reducers/rootReaducer";


const useTypedSelector: TypedUseSelectorHook<rootReducerType>= useSelector;

export default useTypedSelector;