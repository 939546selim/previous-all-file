import React,{useState} from 'react';
import Child from './Child';

export default function App() {
    const[isChild, setIsChild]=useState(false);
  return (
    <>
        {isChild && <Child/>}
        <button onClick={()=>{setIsChild((prev)=>!prev)}}>tregger lifecircle</button>
    
    
    </>
    
  )
}
