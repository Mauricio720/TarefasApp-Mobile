import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState={
    token:'',
    user:{},
    totalConquest:0,
    totalSuccessTask:0,

}

export default (state=initialState,action={})=>{
    switch (action.type){
        case 'SET_TOKEN':
            AsyncStorage.setItem('token',action.payload.token)
            return {...state,token:action.payload.token};
            break;
        case 'SET_USER':
            return {...state,user:action.payload.user};
            break;
        case 'SET_TOTAL_CONQUESTS':
            return {...state,totalConquest:action.payload.totalConquest};
            break;
        case 'SET_TOTAL_SUCCESS_TASK':
            return {...state,totalSuccessTask:action.payload.totalSuccessTask};
            break;
        default:
        break;    
    }

    return state;
}