import { useState } from 'react'
import Form from './components/form/Form'
import List from './components/List/List'

const categories = ["electronics","food","skincare"]
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Form/>
      {
        categories.map(category=><List/>)
      }
    </>
  )
}

export default App
