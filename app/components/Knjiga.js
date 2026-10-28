"use client";
import { useState, useEffect } from "react";

export default function Knjiga() {
  const [listaKnjiga, setListaKnjiga] = useState([]);

  async function ucitajKnjige() {
    const res = await fetch("/api/knjige");
    const data = await res.json();
    setListaKnjiga(data);
  }

  useEffect(() => {
    ucitajKnjige();
  }, []);

  async function deleteBook(id) {
    const res = await fetch("/api/knjige", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    if (res.ok) {
      ucitajKnjige();
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
      {listaKnjiga.map((k) => (
        <div key={k.id} className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col gap-2 hover:shadow-lg transition">
          <h1 className="text-xl font-bold text-blue-700">{k.naslov}</h1>
          <h2 className="text-sm font-medium text-gray-500">{k.autor}</h2>
          <p className="text-gray-700 text-sm line-clamp-3">{k.opis}</p>
          <button onClick={() => deleteBook(k.id)} className="cursor-pointer bg-red-600 text-white font-semibold rounded-md p-2 hover:bg-red-700 transition">
            DELETE BOOK
          </button>
        </div>
      ))}
    </div>
  );
}