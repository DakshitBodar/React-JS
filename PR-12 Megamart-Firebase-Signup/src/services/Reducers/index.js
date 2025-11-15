import { combineReducers } from "redux";
import Menreducer from "./MenReducer";
import { authreducer } from "./authmenreducer";

export const rootReducer = combineReducers({
    Menreducer,
    authreducer
})