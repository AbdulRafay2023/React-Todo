import React, { useRef, useState, useEffect } from 'react'
import TodoItesms from './TodoItems';
let count = 0;

const Todo = () => {

    const [todos, setTodos] = useState([]);
    
    const inputRef = useRef(null);

    const add = ()=>{
       setTodos([...todos,{no:count++, text: inputRef.current.value, display: ""}])
        inputRef.current.value = ""; 
    }
    
    //useeffect means run this code after component render 
    // for get data from local storage   
    useEffect(()=>{
        const savedTodos = JSON.parse(localStorage.getItem("todos")) // json.parse is used to convert string to array/js object
       setTodos(savedTodos);  
   },[]); 

    //for save data in local storage
    useEffect(()=>{
       setTimeout(()=>{
           console.log(todos);
           localStorage.setItem("todos", JSON.stringify(todos)); // local storage only store string so we have to convert array/js object to string using json.stringify
       },1000)
    },[todos])


  return (
   <div className= "flex justify-center items-center h-screen bg-gray-100">
     <div className="bg-white p-6 rounded shadow-md w-[400px]"> 
        <h1 className="">Todo List</h1>
        <div className="flex justify-center items-center mt-4 pl-4 bg-gray-200 rounded">
            <input ref={inputRef} type="text" placeholder="Add a task" className="flex-1 border-none outline-none bg-transparent text-base font-normal py-2 rounded-full" />
            <button onClick={()=>{add()}} className="px-4 py-2 ml-2 bg-blue-600 text-white rounded-full cursor-pointer border border-transparent hover:bg-blue-700">Add</button>
        </div>

        <div className="TodoList mt-4">
          {todos.map((item,index)=>{
             return <TodoItesms key={index} no={item.no} display={item.display} text={item.text} />
          })}
        </div>

    </div>
   </div>
    )
}

export default Todo