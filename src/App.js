import React,{useState} from 'react';

// components
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App=()=>{

  const [todos,setTodos]=useState([]);

  const addTodo= todo=>{
    const newTodos=[todo,...todos];
    setTodos(newTodos);
 }
  
  return (
    <>
      <div className='container'>
        <header className='header'>
        <h1>TODO PWA</h1>
          </header>
      
      <Form addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      </div>
      </>
  );
}

export default App;
