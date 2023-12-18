import React,{useEffect, useState} from 'react'

export default function Child() {
  const[childstate, setChildstate]=useState(false);
  const[childstate2, setChildstate2]=useState(false);
    useEffect(()=>{
        console.log('child iseasyly able to mount')
    }, [])

    useEffect(()=>{
      console.log('child entsring update lifecircle')
    }, [childstate,childstate2])

    useEffect(()=>{
        return ()=>{
            console.log('child is easyly unmounting')
        }
    }, [])
  return (
    <>
      <div>Child</div>
      <button onClick={()=>setChildstate((prev)=>!prev)}>childstate1</button>
      <div>
      <button onClick={()=>setChildstate2((prev)=>!prev)}>childstate2</button>
      </div>
    
    </>
    
  )
}
