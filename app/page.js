"use client"
import React, { useState } from "react";

const Page = () => {
  const [title,setTitle] = useState("")
  const [description, setDescription] = useState("  ")
  const [mainTask, setMainTask] = useState([])
  // const titles = []
  // const descriptions = []
  const submitHandler = (e)=>{
    e.preventDefault()
    // titles.push(title)
    // descriptions.push(description)
    setMainTask([...mainTask, {title,description}]);
    
    setTitle("")
    setDescription("")
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)

  }

  // function Todo({title,description}){
  //     return (
  //       <>
  //         <h1>{title}</h1>
  //         <h5>{description}</h5>
        
  //       </>
  //     )
  // }

  // let renderTask = <h2>No task Available</h2>

  const renderTask = mainTask.map((t,i)=>{
    return(
      <li key = {i} className="flex items-center justify-between mb-5">
      <div className=" mb-5 w-2/3">
        <h1 className="text-2xl font-semibold"> {t.title} </h1>
        <p className="text-xl font-semibold"> {t.description} </p>
      </div>
      <button onClick = {() => {deleteHandler(i)}} className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
      </li>
    )
  })
  return (
    
    <>

    

      {/* <Todo ></Todo> */}
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center"> Saurabh's Todo list</h1>
      <br />
      <form onSubmit={submitHandler} >
        <input type="text" className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 " placeholder="Enter the Task here..."
        value = {title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        <input type="text" className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 " placeholder="Enter the Description here..."
        value = {description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bolc rounded m-5"> Add task!</button>

      </form>
      <hr />
      <div className="p-8 bg-slate-200">
          <ul>
            {renderTask}
          </ul>
      </div>
    </>
  )
}

export default Page