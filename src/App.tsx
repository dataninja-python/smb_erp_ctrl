import React, { useState, useEffect } from 'react'
import { useMultistepForm } from './useMultistepForm';

const formData = [
  {
    id: 0,
    labels: ["first", "last", "phone"],
  },
  {
    id: 1,
    labels: ["first", "last", "phone"],
  },
  {
    id: 2,
    labels: ["first", "last", "phone"],
  },
]


function App() {
  const { steps } = useMultistepForm([]);
  const [pageIndex, setPageIndex] = useState(0);
  let currentPage = pageIndex + 1;
  const formPages = formData.length;

  return (
    <div className="container" style={{ border: "1px border black" }}>
      <div className="row">1/2</div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row">
        <button as="button">back</button>
        <button as="button">next</button>
      </div>
    </div>
  )
}

export default App
