"use client"
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    fetch("https://fast-api-1-uh0r.onrender.com/latest")
      .then(res => res.json())
      .then(data => {
        setTodo(data)
      })
      .catch(err => {
        console.error("Error:", err)
      })
  }, [])

  return (
    <div className="p-4 flex flex-col items-center text-lg font-medium">
      {todo ? (
        <div className="bg-black border-2 border-green-600 p-6 rounded-2xl shadow-xl w-[90%] max-w-md">
          <h2 className="text-2xl font-bold mb-2">📝 {todo.title}</h2>
          <p className="mb-2 text-gray-700">{todo.description}</p>
          <p className={`text-sm ${todo.complete ? "text-green-600" : "text-red-500"}`}>
            Status: {todo.complete}
          </p>
        </div>
      ) : (
        <p>Loading latest todo...</p>
      )}
    </div>
  )
}

export default Page
