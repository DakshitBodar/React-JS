import { applyMiddleware, compose, createStore } from "redux";
import Menreducer from "./services/Reducers/MenReducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(Menreducer,composeEnhancers(applyMiddleware(thunk)));
