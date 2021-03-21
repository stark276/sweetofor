import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import moduleName from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const store = createStore(reducer, initialStore)

