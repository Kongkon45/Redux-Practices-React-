import { GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstants";

const initialTodos = {
    todos : [],
    isLoading : false,
    error : null
}

const todosReducer = (state = initialTodos, action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case GET_TODOS_SUCCESS:
            return{
                isLoading : false,
                todos : action.payload,
                error : null
            }
        case GET_TODOS_REQUEST:
            return{
                isLoading : false,
                todos : null,
                error : action.payload
            }
        default:
            return state;
    }
}

export default todosReducer;