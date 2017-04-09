import { combineReducers } from 'redux';

const todoApp = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todos: todosReducer
});

export default todoApp;
