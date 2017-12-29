import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux"
import App from "./containers/App";

import store from './store';




// const myLogger = (store) => (next) => (action) =>{
//     console.log("Logged Action: ", action);
//     next(action);
// };

// store.subscribe(()=>{
//     console.log("Store updated", store.getState());
// });

render(<Provider store={store}>
            <App/>
        </Provider>, 
        window.document.getElementById('app')
    );