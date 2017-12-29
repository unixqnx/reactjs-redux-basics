import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from "redux";

import math from "./reducers/mathReducer.js";
import user from "./reducers/userReducer.js";

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

// export default createStore(
//     combineReducers({ math, user }), 
//     {}, 
//     applyMiddleware(myLogger, createLogger())
// );

// export default createStore(combineReducers({ math, user }));

export default createStore(
    combineReducers({ math, user }), 
    {}, 
    applyMiddleware(createLogger(), thunk, promise())
);