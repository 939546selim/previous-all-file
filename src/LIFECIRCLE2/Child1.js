import React,{useEffect} from 'react'

export default function Child1() {
    useEffect(()=>{
        console.log('child1 got mounted')
    }, [])

    useEffect(()=>{
        return ()=>{
            console.log('child1 got unmounted')
        }
    }, [])



  return (
    <div>Child1</div>
  )
}
