import React  from 'react'
import classes from './Post.module.css'
import { useState } from 'react'

export default function Post() {
  let [count,setCount] = useState(0)
  let [input,setInput] = useState("ladfladflkl")
  let countClick = ()=>{
    setCount(count+1)

  }

  let getInput = (event) => { setInput(event.target.value) }

  return (
    <div>
    <button className={classes.post} onClick={countClick} >Post</button>
    <input type="text" value={input} onKeyDown={getInput} />
    <div>{input}</div>
    </div>
  )
}



