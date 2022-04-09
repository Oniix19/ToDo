import { combineReducers, createStore } from "redux";
import { tareasReducer } from "../reducers/reducer";

const reducers = combineReducers({
    tareas: tareasReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
