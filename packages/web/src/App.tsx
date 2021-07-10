import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RepButton } from '@rep/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <RepButton variant="contained" size="large">
          Hello{' '}
        </RepButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
