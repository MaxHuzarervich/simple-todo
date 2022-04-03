import React from "react";
import {Todo} from "./Todo";

export const TodoList = ({ todos, setTodos }) => {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) =>
                        (<Todo
                            todo={todo}
                            setTodos={setTodos}
                            todos={todos}
                            key={todo.id}
                            text={todo.text}/>)
                    )}
                </ul>
            </div>
        </div>
    )
}