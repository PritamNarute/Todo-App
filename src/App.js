import { useState } from "react";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/newTodoForm";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([
    {rowTask: "Running Exercise", rowDuration: "30"},
    {rowTask: "Meditation", rowDuration: "20"},
    {rowTask: "Full Body Workout", rowDuration: "50"}
  ]);

  const [todoItemForm, setTodoItemForm] = useState(false);

  const addNewTodoItem = (task, duration) => {
    const newTodo = {
      rowTask: task,
      rowDuration: duration
    };

    setTodos(todos => [...todos, newTodo]);
    setTodoItemForm(false);
  }

  const deleteTodoItem = (index) => {
    const filteredTodos = [];

    for( var i = 0; i<todos.length; i++ ) {
      if(i !== index) {
        filteredTodos.push(todos[i]);
      }
    }

    setTodos(filteredTodos);
  }


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          <h1>Your Todo's</h1>
        </div>
        <div className="card-body">
          <TodoTable
            todos={todos} 
            deleteTodoItem={deleteTodoItem}
          />
          <button className="btn btn-primary" onClick={() => setTodoItemForm(!todoItemForm)}>
              Add New
          </button>
          {
            todoItemForm && 
            <NewTodoForm 
              addNewTodoItem={addNewTodoItem} 
            /> 
          }
        </div>
      </div>
    </div>
  );
}

export default App;
