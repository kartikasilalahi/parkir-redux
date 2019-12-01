const INITIAL_STATE=0
export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "DURASI":
            console.log( 'ini inputan ' + Number(action.payload))
            return Number(action.payload);
        default :
            return state;
    }
}