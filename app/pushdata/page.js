'use client';
import { useRef } from 'react';

export default function AddTodo() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const completeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current?.value || '';
    const description = descriptionRef.current?.value || '';
    const complete = completeRef.current?.checked || false;

    const todoData = {
      title,
      description,
      complete,
    };

    alert( title)
    alert(description)
    alert(complete ? "✅ Completed" : "⏳ Not Completed")

    //  Push to FastAPI backend here using fetch()

    fetch("http://127.0.0.1:8000/",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(todoData),

    })
    .then((res)=>res.json())
    .then((data)=>{
        alert("data has being pushed",data)
    })
    .catch((err)=>alert("error which pushing data",err))

  };

    const clearfun=()=>{
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    completeRef.current.checked = false;
    alert("Cleared all fields");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border-2 border-green-400 rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-green-400 mb-6">
          📝 Add Todo (useRef Magic)
        </h2>

        <input
          type="text"
          ref={titleRef}
          placeholder="Enter Title"
          className="w-full p-3 rounded bg-black border border-green-500 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="text"
          ref={descriptionRef}
          placeholder="Enter Description"
          className="w-full p-3 rounded bg-black border border-green-500 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            ref={completeRef}
            className="mr-2 h-5 w-5 text-green-500 focus:ring-green-400"
          />
          Completed?
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 rounded text-white font-bold transition-all duration-200"
        >
          ✅ Submit
        </button>
        <button
          type="clear"
          className="w-full py-3 bg-red-600 hover:bg-red-700 rounded text-white font-bold transition-all duration-200 mt-6"
          onClick={clearfun}
        >
          ❌ clear 
        </button>
      </form>
    </div>
  );
}
