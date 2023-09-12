import './App.css';
import { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewtask] = useState("");

  const handleChange = (event) => {
    setNewtask(event.target.value);
  };

  const addtask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id + 1,
      taskname: newtask,
    };
    setTodolist([...todolist, task]);
  };

  const deletetask = (id) => {
    const newtodolist = todolist.filter((task) => task.id !== id);
    setTodolist(newtodolist);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addtask}>add task</button>
      </div>
      <div className="list">
        {todolist.map((task) => (
          <div className="task" key={task.id}>
            <h1>{task.taskname}</h1>
            <button onClick={() => deletetask(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
