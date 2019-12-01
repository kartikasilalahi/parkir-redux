import {combineReducers} from 'redux'
import Parkir from './parkirReducer.js'
import Durasi from './durasiParkir'

export default combineReducers({
    bebas: Parkir,
    bebas1: Durasi
})