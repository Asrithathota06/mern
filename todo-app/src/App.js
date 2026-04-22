import {useState,useEffect} from "react";
import TodoList from "./components/TodoList";

function App(){
  const[task,setTask]=useState("");
  const[todos,setTodos]=useState(()=>{
    const s=localStorage.getItem("todos");
    return s? JSON.parse(s):[];
  });

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const addTo=()=>{
    if(task.trim()===""){
      return;
    }
    setTodos([...todos,task]);
    setTask("");
  }

  const deleteTodos=(idx)=>{
    const newTodos=todos.filter((_,i)=>i!==idx);
    setTodos(newTodos);
  }

  return(
    <div style={{textAlign:"center" , marginTop:"50px"}}>
      <h2>Simple TodoAPP</h2>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={(addTo)}>Add</button>

      <TodoList todos={todos} deleteTodos={deleteTodos}/>
    </div>
  );
}
export default App;