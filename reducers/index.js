const Redux = require('../libs/redux.js')
const combineReducers = Redux.combineReducers;
const todoReducer = require('./todos.js')

const todoApp = combineReducers({
  todoReducer
})

module.exports = todoApp