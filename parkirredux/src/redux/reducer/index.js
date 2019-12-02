import {combineReducers} from 'redux'
import Parkir from './parkirReducer.js'
import Durasi from './durasiParkir'
import Teks from './textReducer'


export default combineReducers({
    bebas: Parkir,
    bebas1: Durasi,
    bebas2: Teks
})