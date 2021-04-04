import {applyMiddleware, combineReducers, compose, createStore} from "redux";


import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    form: formReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));


// const store = createStore(reducers, /* preloadedState, */ compose(
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store