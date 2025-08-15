import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105 mx-auto">
     {/* AI语义 */}
     {/* <h1 className='text-3xl font-bold underline'>hello world, tailwindcss</h1> */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" 
          alt="" 
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          new
        </span>
      </div>
    </div>
  )
}

export default App