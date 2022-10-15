import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import { containerWrapperStyles } from './data/FormStyles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={containerWrapperStyles}>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
