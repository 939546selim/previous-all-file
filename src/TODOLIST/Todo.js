// import React from 'react'

// export default function Todo({todo}) {
//   return (
//     <div>{todo}</div>
//   )
// }



// import React from 'react'

// export default function Todo({word}) {
//   console.log(word);
//   return (
//     <div>{word}</div>
//   )
// }

import React from 'react'

export default function Todo({word ,  id, handleTodoDelit}) {
  return (
    <div style={{display: 'flex', columnGap:'10px'}}>
      <div>{word}</div>
      <button>COMPLETEICON</button>
      <button onClick={()=>handleTodoDelit(id)}>DELITICON</button>
    
    
    
    </div>
  )
}

