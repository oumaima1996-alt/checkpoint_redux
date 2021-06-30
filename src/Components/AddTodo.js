import React, {useState} from 'react'
import {connect} from 'react-redux'
import {add_todo} from '../redux/action/action'

const AddTodo = ({add_todo}) => {
    const [text, setText ] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newtodo = {
          id: Math.random(),
          text: text,
          isComplete: false,
        };
        
    add_todo(newtodo);
    setText("");
        
      };
    
    return (
        <div>
            <input type = "text" placeholder ="enter your new todo" value = {text} onChange  = {(e) =>setText(e.target.value)} />
            <button onClick = {handleSubmit}>ADD</button>
            
        </div>
    )
}

export default connect(null, {add_todo})(AddTodo)
