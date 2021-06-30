import React, {useState} from 'react'
import {connect} from "react-redux"
import {remove_todo, toggle_todo} from '../redux/action/action.js'
import EiteTodo from '../Components/EiteTodo.js'
import '../App.css'

const TodoCard = ({todo, remove_todo, toggle_todo}) => {
    const deleteTodo =() => {
        remove_todo(todo.id)
    }
    return (
        <div className = "styling">
            <p><h3 style = {todo.isComplete ? {textDecoration: "line-through", color:"lightgray"}:{color:"black"} }>{todo.text} </h3></p>
            <p><EiteTodo todo = {todo} /></p>
            <p><button onClick = { deleteTodo}>😶</button></p> 
            <button onClick = {() =>toggle_todo(todo.id)}>{todo.isComplete ? "complete": "not complete"}</button>
            
        </div>
    )
}

export default connect(null, {remove_todo, toggle_todo}) (TodoCard)
