import axios from 'axios'
import * as types from './types'

export const homeList = (list)=>({
    type:types.HOME_LIST,
    list:list,
})

export const getHomeList = (page)=>{
    return(dispatch)=>{
       //异步操作
    }
}