import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import Menreducer from "./services/Reducers/MenReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(Menreducer,composeEnhancers(applyMiddleware(thunk)));
