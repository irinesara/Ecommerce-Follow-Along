
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes } from 'react-router-dom'
import {Login} from './Components/login'
import './App.css'

function App() {

  return (
    <>
   <Routes>
    <Route path="/login" elements={<Login/>}/>
   </Routes>
    </>
  )
}

export default App
