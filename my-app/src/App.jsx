import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Home } from './page/Home';
import { Productform } from './Components/Productform';
import { Productcardforseller } from './Component/productcardforseller'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Productform" element={<Productform />} />
        <Route path="/my-product" element={<Productcardforseller />} /> 
      </Routes>
    </>
  );
}

export default App;