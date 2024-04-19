import React, { useState } from 'react'

const Toggle = () => {
      {/*toggle Button*/}
    const [show,setShow] =useState(false)
  return (
    <div>
 {/*toggle Button====================> */}

    {
        show ?
        <h1> Hello world</h1> :
        null
    }
       

        <button onClick={()=>setShow(true)}> Show</button>
        <button onClick={()=>setShow(false)}> Hide</button>
        <button onClick={()=>setShow(!show)}> toggle Button</button>

    </div>
  )
}

export default Toggle