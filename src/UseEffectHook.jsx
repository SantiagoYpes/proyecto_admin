import { useEffect,useState } from "react";

export const UseEffectHook = () =>{
    /*The UseEffect Hook is used to notify when a component is updated. 
    If the array is empty, that means that is used to show the notify only when te component is render, that is to say, it show in the console one time.
    Id the array has a variable, its means that will be updated when the variable is updated, the variable in the array is called dependencie */
    
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        console.log("The component has been rendered")
    }, [counter])
    return <>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>Increase</button>
    </>

}