import { useState,useEffect } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
const [count, setCount] = useState(0)
const [num, setNum] = useState(0)
console.log('App reander')
useEffect(() => {
  console.log('count', count)
},[count])
useEffect(() => {
  console.log('num', num)
},[num])
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <button onClick={() => setNum(num + 1)}>+</button>
      <br />
      <Button num={num}>
        Click Me
      </Button>
    </>
  )
}

export default App
