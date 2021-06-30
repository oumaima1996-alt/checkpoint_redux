

import { ADD_TODO, 
    EDIT_TODO, 
    REMOVE_TODO, 
    TOGGLE_COMPLETE} from '../action/actionTypes.js'
    const initialState = {
        todo: [{
            id:1,
            text:"Learn react js",
            isComplite: false
        },
        {
            id:2,
            text:"Learn node js",
            isComplite: false
        }]
    }
    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case ADD_TODO : return ( {
                ...state, todo: [...state.todo, action.payload]

            })
            case EDIT_TODO : return ( {
                ...state, todo:state.todo.map(el =>el.id ===action.payload.id ? el = action.payload.edittodo : state.todo)
                
            })
            case REMOVE_TODO : return ( {
                ...state, todo : state.todo.filter(el =>el.id !== action.payload)
                
            })
            case TOGGLE_COMPLETE : return ( {
                ...state,todo:state.todo.map(el =>el.id === action.payload ?{...el, isComplete:el.isComplete}: state.todo)
                
            })
            default : 
            return state
        }

    }
     

export default reducer

       
    
