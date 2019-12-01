import {MOBIL, MOTOR} from '../../type'

export const Mobil=(durasi)=>{
    return {
        type: MOBIL,
        payload: durasi
    }
}

export const Motor=(durasi)=>{
    return {
        type: MOTOR,
        payload: durasi

    }
}




