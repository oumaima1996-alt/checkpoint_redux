import React from 'react'
import TodoCard from '../Components/TodoCard.js'
import {connect} from 'react-redux'

const TodoList = ({todolist}) => {
    console.log('todolist',todolist )
    return (
        <div>
            {todolist.map(el => <TodoCard  todo = {el}/>)}
            
           
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todolist:state.todo
    }
}

export default connect(mapStateToProps) (TodoList)
