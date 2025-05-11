import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing additional components
import Button from './assets/components/button.jsx'
import DiagonalRoundedImg from './assets/components/DiagonalRoundedImg.jsx'
import Icons from './assets/components/icons.jsx'
import NavBar from './assets/components/NavBar.jsx'
import PresInfo from './assets/components/PresInfo.jsx'
import PresPic from './assets/components/PresPic.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount(count + 1)}>
          Count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <DiagonalRoundedImg />
      <Icons />
      <PresInfo />
      <PresPic />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
