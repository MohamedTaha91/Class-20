import { useState } from 'react';
import { Route, Routes, Navigate} from "react-router-dom"
import './App.css';
import Footer from './components/Footer';
import robotList from './robot_products.json'
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import NavBar from './components/NavBar';


function App() {
  const [robots, setRobots] = useState(robotList);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <>
    <NavBar setRobots={setRobots} robots={robots} cartNumber={cartNumber} />
    
    <Routes>
      <Route path='/' element={<Navigate to ="/products"/>} />
      <Route path='/products/' 
      element={<ProductPage
      robots={robots}
      cartNumber={cartNumber}
      setCartNumber={setCartNumber}
      />}
        /> 
        <Route path='/products/:index' element={<ProductDetails/>}></Route>

    </Routes>
      <Footer />
    </>
  )


}

export default App
