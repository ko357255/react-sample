import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      ここはAPP
      <div>
        カウント:{count}
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          カウント
        </button>
      </div>
    </>
  )
}

export default App
