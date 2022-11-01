import React from 'react'
import { useState } from 'react'
function HomeWithUseStateHook() {
    const [color , setColor] = useState("");

    const yellowColorHandler = () =>
    {
        setColor("yellow")
    }
  return (
    <div>
        <p style={{backgroundColor : color}}>Background color is {color}</p>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={yellowColorHandler}>Yellow</button>
    </div>
  )
}

export default HomeWithUseStateHook