import { ADD_TODO, 
    EDIT_TODO, 
    REMOVE_TODO, 
    TOGGLE_COMPLETE} from './actionTypes.js'


    export const add_todo = (newtodo) => {
        return {
            type:ADD_TODO,
            payload:newtodo
        }
    }

    export const edit_todo = (edittodo) => {
        return {
            type:EDIT_TODO,
            payload: edittodo
        }
    }

    export const remove_todo = (id) => {
        return {
            type:REMOVE_TODO, 
            payload:id
        }
    }
    export const toggle_todo = (id) => {
        return {
            type:TOGGLE_COMPLETE,
            payload: id

        }
    }
    