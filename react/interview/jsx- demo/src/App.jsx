import { useState, creatElement } from 'react'
import './App.css'

function App() {

    const element = <h1 className='title'>Hello,world</h1>;
    const element2 = creatElement('h1',{className:'title',id:'tit'},'Hello,world')
    return(
    <>
    {element}
    </>
  )
}

export default App
