import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Caraousel from './components/Caraousel'
import Works from './components/Works'



function App() {


  return (
    <div className='bg-[#1e2e12]'>
      <Hero></Hero>
      <Navbar></Navbar>
      <Caraousel></Caraousel>
      <Works></Works>
     
    </div>
  )
}

export default App
