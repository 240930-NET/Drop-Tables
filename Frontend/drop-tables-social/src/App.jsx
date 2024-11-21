import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='content'>
        <h1>Drop Tables</h1>
        <ul>
          <li><a href="/api/users">Users</a></li>
          <li><a href="/api/posts">Posts</a></li>
          <li><a href="/api/follows">Follows</a></li>
        </ul>
      </div>
    </>
  )
}

export default App
