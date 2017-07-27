import { combineReducers } from 'redux'
import addedList from './addedList'
import weather from './weather'

export default combineReducers({
    addedList,
    weather
})