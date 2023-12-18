import React, {useState,useEffect} from 'react';


export default function Child() {
    const[count, setCount]=useState(10);
    useEffect(()=>{
        setTimeout(()=>{
            if(count> 0){
                setCount((prev)=>{
                    return prev-1
                })


            }

        }, 1000)

    }, [count])
  return (
    <div>{count}</div>
  )
}
