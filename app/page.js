"use client"

import { use, useState } from "react";


const Home =()=>{
  const [messages, setMessages] = useState("");
  const [response, setResponse] = useState("");
  const [streaming, setStreaming] = useState("");
  const [streamResponse, setStreamResponse] = useState("");
  const [loading, setLoading] = useState("");


  const handlechat = async() =>{
    setLoading(true);
    setResponse("")
    try {
      await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      })

      const data = await res.json();
      setResponse(data.response)
    } catch (error) {
      setResponse("Error:"+ error.message)
      
    }
    setLoading(false)
  }
  return(
    <div className="font-sans m-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to Next Day 1</h1>
      <div className="mt-10">
        <textarea 
        value= {messages}
        onChange={(e) => setMessages(e.target.value)}
        placeholder="Type your message here..."
        rows={10}
        className="w-100 h-30 p-3 border border-gray-300 rounded resize-none outline-0"
        />
      </div>
      <div className="mt-2">
        <button 
        onClick={handlechat}
        className="w-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  )
}

export default Home;