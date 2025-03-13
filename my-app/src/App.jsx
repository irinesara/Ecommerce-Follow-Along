import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Home } from './page/Home';
import { Productform } from './Components/Productform';
import { Productcardforseller } from './Components/productcardforseller'; 
import { CreateAddress } from './Components/Address'; 
import { Singleproductpage } from './Components/Singleproductpage';
import { Singlecard } from './Components/Singlecard';
import Cart from './page/cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Productform" element={<Productform />} />
        <Route path='/address' element={<CreateAddress/>}/>
        <Route path="/my-product" element={<Productcardforseller />} /> 
        <Route path="/product/:id" element={<Singlecard/>}/>
        <Route path="/product/:id" element={<Singleproductpage/>}/>
        <Route path='/cart'  element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
