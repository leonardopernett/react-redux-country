import {createStore,combineReducers} from 'redux'
import {createReducer} from './countryStore'

const reducer = combineReducers({
    array:createReducer
})

export const store = createStore(reducer);