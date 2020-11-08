const AUTH_INITIAL={
    users:''
        
    
}


export default (state=AUTH_INITIAL,action)=>{
    switch (action.type){
        case 'AUTH_USERS' :
            return({
                ...state,
                users:action.payload
            })
            case 'SIGN_OUT':
                return({
                    ...state,
                    users:action.payload
                })
            
            default :
            return state
        }
}