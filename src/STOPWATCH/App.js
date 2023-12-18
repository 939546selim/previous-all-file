import React, {useState, useEffect} from 'react';
import Child from './Child';

export default function App() {
    const[isChild, setIsChild]=useState(false);
  return (
    <>
        {isChild && <Child/>}
        <button onClick={()=>setIsChild((prev)=>!prev)}>child</button>
    
    
    
    </>
  
  )
}
