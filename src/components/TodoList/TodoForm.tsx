import React, { useState } from "react";
import TodoRequests from "../DAL/requests";

export const TodoForm:React.FC = () => {
    let [todoText, setTodoText] = useState("");
    const todoFormInputChange = (event: any) => {
        setTodoText(event.target.value);
      };
    const changeTodo = () => {
        TodoRequests.addTodo(todoText);
        setTodoText("")
    }
    return(
        <div>
            <input type="text" value={todoText} name="" id="" onChange={todoFormInputChange}/>
            <button onClick={changeTodo}>add</button>
        </div>
    )
}