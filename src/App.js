import './App.css';
import {useState} from 'react';

function App() {
  const [todo, setTodo] = useState([
    {name: "Buy Groceries", priority: "low"},
    {name: "Walk Dog", priority: "high"},
    {name: "Cook Dinner", priority: "low"}
  ]);

  const [newTask, setNewTask] = useState("");

  const [newPriority, setNewPriority] = useState("");

  const todoNodes = todo.map((task, index) => {
    return (
      <li key={index} className={task.priority}>
        <span>
          {task.name}
        </span>
      </li>
    )
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }

  const handleTaskPriority = (event) => {
    setNewPriority(event.target.value);
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTodo = [...todo];
    copyTodo.push({
      name: newTask,
      priority: newPriority
    });
    setTodo(copyTodo);
    setNewTask("");
  }

  return (
    <div className="App">
    <h1>To Do List</h1>
    <hr></hr>

    <ul>
        {todoNodes}
    </ul>

    <form onSubmit={saveNewTask}>
      <label htmlFor="new-task">Add New Task</label>
      <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
      <label htmlFor="high-priority">High</label>
      <input name="radios" id="high-priority" type="radio" value="high" onChange={handleTaskPriority}/>
      <label htmlFor="low-priority">Low</label>
      <input name="radios" id="low-priority" type="radio" value="low" onChange={handleTaskPriority}/>
      <input type="submit" value="save new task"/>

    </form>

    </div>
  );
}

export default App;
