const initState = {
    users: [
        {id: 1, name: 'Van'},
        {id: 2, name: 'Jame'},
        {id: 3, name: 'David'}
    ],
    post: []
}
const rootReducers = (state = initState, action) =>{
    switch (action.type){
        case 'DELETE_USER':
            let users = this.state
            users = users.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                users
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