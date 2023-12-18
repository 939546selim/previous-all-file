import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay';




export default function App() {
  const [todoList, setTodoList]=useState([]);
  function addTodo(typeWordObj){
    setTodoList((prev)=>{
      return [...prev, typeWordObj]
    })


  }
  function handleTodoDelit(id){
   
    setTodoList((prev)=>{
      const newArr=prev.filter((word)=>{
        console.log(word);
        return word.id!==id;
      


      })
      return newArr;
      
      

    })
   


 
  }
  return (
    <>
    < TodoForm  addTodo={ addTodo} />
    < TodoDisplay todoList={todoList} handleTodoDelit={handleTodoDelit}/>

    
    
    </>
  )
}
