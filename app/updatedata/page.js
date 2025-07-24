'use client';

import { useRef } from 'react';
import Navbar from '../components/nav';

export default function Home() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const completeRef = useRef(null);
  const idRef = useRef(null);

  const handleUpdateTodo = async () => {
    const updatedTodo = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      complete: completeRef.current.value.toLowerCase() === 'true',
    };

    const todoId = idRef.current.value;

    try {
      const response = await fetch(`https://fast-api-1-uh0r.onrender.com/${todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });

      const data = await response.json();
      console.log('✅ Todo updated:', data);
      alert('Todo updated successfully!');
    } catch (err) {
      console.error('❌ Error updating todo:', err);
      alert('Failed to update todo.');
    }
  };

  return (
    <>

    <div>
      <Navbar></Navbar>
    </div>
            <main className="flex min-h-screen flex-col items-center justify-center p-8 space-y-6 bg-black">
      <h1 className="text-3xl font-bold mb-4 text-green-400">🔄 Update Todo</h1>

      <input
        ref={titleRef}
        type="text"
        placeholder="Title"
        className="border p-2 w-72 rounded shadow"
      />
      <input
        ref={descriptionRef}
        type="text"
        placeholder="Description"
        className="border p-2 w-72 rounded shadow"
      />
      <input
        ref={completeRef}
        type="text"
        placeholder="Completed? (true/false)"
        className="border p-2 w-72 rounded shadow"
      />
      <input
        ref={idRef}
        type="text"
        placeholder="Enter Todo ID to update"
        className="border p-2 w-72 rounded shadow text-red-600"
      />

      <button
        onClick={handleUpdateTodo}
        className="mt-4 px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-green-700 transition-all shadow"
      >
        Update Todo 🚀
      </button>
    </main>
    </>
    
  );
}
