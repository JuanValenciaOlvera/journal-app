
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { iuReducer } from '../reducers/uiReducer';


const compose = null;
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    auth: authReducer,
    ui: iuReducer,
    notes: notesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )  /* Middleware async tareas */
    ) );