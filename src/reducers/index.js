import { combineReducers } from 'redux'
import addedList from './addedList'
import fullList from './fullList'
import weather from './weather'

export default combineReducers({
    addedList,
    fullList,
    weather
})