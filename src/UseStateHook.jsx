import { useState } from "react";
export const UseStateHook = () =>{
    const [counter, setCounter] = useState(0)
    const [message,setMessage] = useState('')
    return <>
        <h1> Counter: {counter}</h1>
        <button onClick={()=>{
            setCounter(counter+1)
        }}> Increase </button>

        <button onClick={()=>{
            setCounter(counter-1)
        }}> Decrease </button>
        <button onClick={()=>{
            setCounter(0)
        }}> Reboot </button>
        <br></br>   <br></br>
        <input onChange={e=>{setMessage(e.target.value)}}></input>
        <button onClick={()=>{
            alert("El mensaje es: "+message)
        }}>
            Save
        </button>
    </>
}