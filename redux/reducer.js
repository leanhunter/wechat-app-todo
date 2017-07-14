import { combineReducers } from '../vendors/redux.min.js';

const todoReducer = require('./todos.js')

const todoApp = combineReducers({
  todoReducer
})

module.exports = todoApp

