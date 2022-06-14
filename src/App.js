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
    //run once when the app start
    useEffect(() => {
        getLocalTodos();
    }, []);
    //use effect
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
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
    //save to local
    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        }else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal)
        }
    }
    return (
        <div>
            <header>
                <h1>TODOS</h1>
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

