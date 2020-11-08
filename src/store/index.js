import cardReducer from './reducer/index'
import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const store = createStore(cardReducer ,applyMiddleware(thunk))

export default store;