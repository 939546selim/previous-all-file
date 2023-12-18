

import React from 'react';
import Todo from './Todo';

export default function TodoDisplay({todoList, handleTodoDelit}) {
  return (
    <>
    {todoList.map((word, index)=>{
        return < Todo word={word.data}  id={word.id} handleTodoDelit={handleTodoDelit} />
    })}
    
    </>
   
  )
}

