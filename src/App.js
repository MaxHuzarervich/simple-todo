import './App.css';
import {Form} from "./components/Form";
import {TodoList} from "./components/Todolist";
import {useEffect, useState} from "react";

export function App() {
    //state
    const [inputText, setInputText] = useState(''),
        [todos, setTodos] = useState([]),
        [status, setStatus] = useState('all'),
        [filteredTodos, setFilteredTodos] = useState([])
    //use effect
    useEffect(() => {
        filterHandler();
    }, [todos, status])
    //functions
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    return (
        <div className="App">
            <header>
                <h1>ToDo</h1>
            </header>
            <Form
                setStatus={setStatus}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}/>
            <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
        </div>
    );
}

