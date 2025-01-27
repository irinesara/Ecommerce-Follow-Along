import { Route, Routes } from 'react-router-dom'

import { Login } from './Components/login'
import { Signup } from './Components/signup'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App