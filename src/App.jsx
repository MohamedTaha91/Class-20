
import { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import robotList from './robot_products.json';
import NavBar from './components/NavBar';

function App() {
  const [robots, setRobots] = useState(robotList);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <>
      <NavBar setRobots={setRobots} robots={robots} cartNumber={cartNumber}/>
      <section className='robots-container'>
        {
          robots.map((eachRobot, index) => {
            return <ProductCard key={index} details={eachRobot} setCartNumber={setCartNumber} cartNumber={cartNumber} />
          })
        }

      </section>
    </>
  )
}

export default App
