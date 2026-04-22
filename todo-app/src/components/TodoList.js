import React from "react";

function TodoList({todos,deleteTodos}){
    return (
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                    {todo}
                    <button onClick={()=>deleteTodos(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;