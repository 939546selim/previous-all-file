import React,{useState} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export default function App() {
    const[isChild1, setIsChild1]=useState(true);
  return (
    <>
        {isChild1 ? <Child1/> : <Child2/>}
        <button onClick={()=>setIsChild1((prev)=>!prev)}>change componant</button>
    
    
    </>
    
  )
}
