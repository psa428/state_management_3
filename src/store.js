import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';



import { reducerBeg } from './reducers/reduser-beg';
import { reducerEdit } from './reducers/reduser-edit';

const reducer = combineReducers({
    initState: reducerBeg,
    toDoState: reducerEdit   
  });
export const store = createStore (reducer, applyMiddleware(thunk) );

