import React, {useEffect} from 'react'

export default function Child2() {
    useEffect(()=>{
        console.log('child2 got mounted')
    }, [])

    useEffect(()=>{
        return ()=>{
            console.log('child2 got unmounted')
        }
    }, [])

  return (
    <div>Child2</div>
  )
}
