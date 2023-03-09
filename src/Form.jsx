import { FaBeer } from 'react-icons/fa';

export const Form = () =>{
    return <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data =>console.log(data)).catch(error => console.error(error))
            }}>
            <FaBeer/>
            <input onChange={handleChange}></input>
            <button> Bring Data </button>
            
        </form>
    </>
}

function handleChange(e){
    console.log(e.target.value)
}

