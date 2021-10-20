import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react'

function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const prevName = useRef('')

  function focus(){
    inputRef.current.focus()
  }

  useEffect(()=> {
    prevName.current = name
  }, [name])

  return (
    <div className="App">
    <input ref={inputRef} value={name} onChange={e=> setName(e.target.value)}/>
    <h1>My name is {name}</h1>
    <h2> My prev name was {prevName.current} </h2>
    <button onClick={focus }>focus</button>
    </div>
  );
}

export default App;
