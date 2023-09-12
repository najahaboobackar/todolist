import './App.css';
import { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newtask,setNewtask] = useState("")
  const handleChange=(event)=>{
    setNewtask(event.target.value);
  };
    const addtask =()=>{
      const newtodolist=[...todolist,newtask]
      setTodolist(newtodolist);
    };
  const deletetask =()=>{

  };

  return (
    <div className="App">
      <div className="addtask">
        <input onChange={handleChange} />
        <button onClick={addtask}>add task</button>
      </div>
      <div className="list">
        {todolist.map((task )=> {
          return <div><h1>{task}</h1>
          <button onClick={()=>deletetask(task)}>X</button></div>

        })}
      </div>
    </div>
  );
}

export default App;
