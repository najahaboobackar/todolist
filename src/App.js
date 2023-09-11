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
  

  return (
    <div className="App">
      <div className="addtask">
        <input onChange={handleChange} />
        <button onClick={addtask}>add task</button>
      </div>
      <div className="list">
        {todolist.map((task )=> {
          return <h1>{task}</h1>

        })}
      </div>
    </div>
  );
}

export default App;
