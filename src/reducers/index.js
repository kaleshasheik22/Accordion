import { combineReducers } from 'redux'
import {accordionReducer} from './accordionReducer'

export const state = combineReducers({
    accordionData: accordionReducer
 
})