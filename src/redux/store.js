import { createStore, combineReducers } from "redux";

import nameReducer from "./reducers/name";
import emailReducer from "./reducers/email";
import idReducer from "./reducers/id";
import dobReducer from "./reducers/dob";

const rootReducer = combineReducers({
  name: nameReducer,
  dob: dobReducer,
  email: emailReducer,
  id: idReducer,
});

const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
