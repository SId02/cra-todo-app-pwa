import React from 'react';

const Todo=({todo,completeTodo,removeTodo})=>{
    
    const HandleComplete=()=>{
        completeTodo(todo.id);
    }
    const HandleDelete=()=>{
        removeTodo(todo.id);
    }

    return(
        <div>
            <div className="todo task">
            <li className={todo.completed?"checked":""}>
                {todo.text}
            </li> &nbsp;
            <button onClick={HandleComplete} className="check-btn">{todo.completed?"Complete":"Pending"}</button> &nbsp;
            <button className="delete-btn" onClick={HandleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;