import React, { useEffect, useState } from 'react'
import { NavigationBar } from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <>
      <NavigationBar />
      <p>{!data ? 'Loading...' : data}</p>
    </>
  )
}

export default App
