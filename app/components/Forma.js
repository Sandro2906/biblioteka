"use client"
import { useState } from "react";

export default function Forma() {

const [name, setName] = useState("")
const [author, setAuthor] = useState("")
const [genre, setGenre] = useState("")

  async function handleSubmit(){

  // Handle form submission logic here
  if(!name || !author || !genre){
    alert("Please fill in all fields!");
    return;}
 

  const res = await fetch("/api/knjige", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name, author, genre}),
  })

  if(res.ok){
    setName("");
    setAuthor("");
    setGenre("");
  } else {
    console.log("Smoething is not okay!")
  }
}


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white border rounded-xl shadow-lg p-6 m-3 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center text-blue-700">Add Book</h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Na Drini ćuprija" />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ivo Andrić" />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Genre</label>
        <input value={genre} onChange={(e)=> setGenre(e.target.value)} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Roman" />
      </div>

      <button type="submit" className="cursor-pointer bg-blue-600 text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition">
        ADD BOOK
      </button>
    </form>
  );
}