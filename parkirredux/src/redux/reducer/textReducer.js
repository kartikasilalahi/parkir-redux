import {JUMLAH} from '../../type'
const INITIAL_STATE=0
export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case JUMLAH:
            var tampungkalimat=(action.payload).split(' ')
            console.log(tampungkalimat)
            var jumlah = 0
            for(var i = 0; i < tampungkalimat.length; i++)
                if(tampungkalimat[i] !== '' )jumlah++
            console.log(jumlah)
            return jumlah
        default :
            return state;
    }
}