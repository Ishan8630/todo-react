import React,{ useState } from 'react';
import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
function App() {
    const [todos,setTodos] =useState([
      {
        id :1,
        content :'wake up'
      },
      {
        id :2,
        content : 'brush teeth'
      }
    ]);
    const deleteTodo = (id) =>{
      setTodos(todos.filter((todo) => todo.id!==id));
    };
    const addTodo = (newTodo) =>{
      setTodos([...todos,{id:Date.now() ,content:newTodo}]);
    };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo App</h1>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
      <NewTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
