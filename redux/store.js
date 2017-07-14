


import {
    createStore,
    applyMiddleware,
    combineReducers
} from '../vendors/redux.min.js';
import thunk from '../vendors/redux-thunk.js';

// import reducers
import rootReducer from './reducer.js';



export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk
    )
);