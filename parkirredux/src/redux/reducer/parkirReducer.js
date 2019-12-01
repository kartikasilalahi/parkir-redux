import { MOBIL, MOTOR, RESET } from '../../type'

const INITIAL_STATE = 0

export default(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case MOBIL: return action.payload*2000;
        case MOTOR: return action.payload*1000;
        case RESET: return 0;
        default: return state
    }
}
