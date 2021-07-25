import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { RepButton, RepBox } from '@rep/ui'
import styled from '@emotion/styled'

const StyledButtonX = styled(RepButton)`
  color: blue;
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <RepBox className="App" p={4}>
      <header className="App-header">
        <StyledButtonX variant="contained" size="large">
          Hello{' '}
        </StyledButtonX>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </RepBox>
  )
}

export default App
