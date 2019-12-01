import {MOBIL, MOTOR, DURASI} from '../../type'

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

export const Durasiparkir=(durasi)=>{
    return {
        type: DURASI,
        payload: durasi
    }
}




