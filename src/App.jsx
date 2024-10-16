import { useState } from 'react'
import Form from './components/form/Form'
import List from './components/List/List'

const categories = ["electronics","food","skincare"]
function App() {
  
  return (
     <div className="App">
      <div>
        <Form/>
      </div>
      <div>
        <List/>
      </div>
    </div>
  )
}

export default App
