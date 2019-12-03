import {JUMLAH} from '../../type'
const INITIAL_STATE=0
export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case JUMLAH:
            var jumlahkata=((action.payload).split(' ').filter((val)=>val !== '')).length
            return jumlahkata
        default :
            return state;
    }
}