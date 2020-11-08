import reducer from './reducer'
import AuthUser from './auth'
import {combineReducers} from 'redux';

export default combineReducers({
    card : reducer,
    auth_users:AuthUser
})