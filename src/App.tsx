 
import { useRef, useState } from 'react'
import './App.css'

interface item {
  id: number;
  text: string;

}
function App() {
  const myRef =useRef<any>()
  const [todos,setTodos]=useState<item[]>([])
  
  
  const add = () => {
    const value =  myRef.current.value
    const addvalue: item = {id:Date.now(),text:value} 
    setTodos([...todos,addvalue])
  
    
  }
  const deleteitem = (id:number) =>{
    
  setTodos( todos.filter((e)=>e.id != id ))
  
  }
  
 
  return (
    <>
    <input type="text" name="" ref={myRef} placeholder='enter your todo' />
    <button type="button"   onClick={add}>Add</button>
    <ul >
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
           <button type="button" onClick={()=>deleteitem(todo.id)}>Delete</button>
           </li>
        ))}
      </ul>
    </>
  )
}

export default App
