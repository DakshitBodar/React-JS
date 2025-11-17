import { combineReducers } from "redux";
import { Studentreducer } from "./StudentReducer";
import { authreducer } from "./authStudentReducer";

export const rootReducer = combineReducers({
    Studentreducer,
    authreducer
})