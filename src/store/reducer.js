import { combineReducers } from 'redux-immutable';
import {reducer as HomeReducer} from './home'
const reducer = combineReducers({
    home:HomeReducer,
})

export default reducer 