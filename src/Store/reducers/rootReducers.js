const initState = {
    users: [
        {id: 2, name: 'Jame'},
        {id: 3, name: 'David'}
    ]
}
const rootReducers = (state = initState, action) =>{
    switch (action.type){
        case 'DELETE_USER':
            return{
                ...state,
                users: state.users.filter((item, index) => index !== action.payload)
            }
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 100000)
            let user = {id: id, name: `random + ${id}`}
            return {
                ...state, users: [...state.users, user]
            }
        default: return state
    }
}
export default rootReducers