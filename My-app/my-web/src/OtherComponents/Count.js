import React, { useState } from 'react'

const Count = () => {
    const [change,setchaange]=useState(0)
    const increment = ()=>{
        setchaange(change + 1)
    }
    const decrement = ()=>{
        setchaange(change - 1)
    }
  return (
    <div>
<h2>{change}</h2>
<h2>Count Pge</h2>

    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Count