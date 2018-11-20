import { fromJS } from 'immutable';
import * as types from './types'
const defaultState = fromJS({
    title:'我是home的数据'
})

export default (state = defaultState,action)=>{
    switch(action.type){
        case types.HOME_LIST:
            return 
        default:
            return state;
    }
}