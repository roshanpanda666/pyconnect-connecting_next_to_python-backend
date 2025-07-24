'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav'

const Page = () => {
  const [todos, setTodos] = useState([]) // store all todos as array

  useEffect(() => {
    fetch("https://fast-api-1-uh0r.onrender.com/")
      .then(res => res.json())
      .then(data => {
        setTodos(data) // assuming backend sends array
      })
      .catch(err => {
        console.error("Error:", err)
      })
  }, [])

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
          <div className="p-4 flex flex-wrap items-center text-lg font-medium">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <div
            key={index}
            className="bg-black text-white border-2 border-green-600 p-6 m-4 rounded-2xl shadow-xl w-[90%] max-w-md"
          >
            <h2 className="text-2xl font-bold mb-2">📝 {todo.title}</h2>
            <p className="mb-2 text-gray-300">{todo.description}</p>
            <p
              className={`text-sm ${
                todo.complete ? "text-green-400" : "text-red-400"
              }`}
            >
              Status: {todo.complete}
            </p>
          </div>
        ))
      ) : (
        <p>Loading all todos...</p>
      )}
    </div>
    </>
    
  )
}

export default Page
