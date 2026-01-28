import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Interets from "./components/Interests"
import Work from "./components/Projects"
import Contact from "./components/Contact"
import Certificates from "./components/Certificates"
import Companies from "./components/Technologies"

const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Interets/>
      <Work/>
      <Companies/>
      <Certificates />
      <Contact/>
    </div>
  )
}

export default App
