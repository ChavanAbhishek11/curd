
import React from 'react'
import Create from './Component/Create'
import { Route ,Routes} from 'react-router-dom'
import Read from './Component/Read'
import Edit from './Component/Edit'


function App() {
  return (
    <div>
     <Routes>
      <Route  exact path="/" element={<Read/>}/>
      <Route  exact path="/create" element={<Create/>}/>
     </Routes>
     <Edit/>
    </div>
  )
}

export default App