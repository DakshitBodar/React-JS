import { createStore } from "redux";
import Menreducer from "./services/Reducers/menReducer";

export const store = createStore(
  Menreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
