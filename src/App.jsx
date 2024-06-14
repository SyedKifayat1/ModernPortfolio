import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import Testimonials from "./Components/Testimonials"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Aos from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
    Aos.init({
      duration:500,
      easing:'ease-in-sine',
    })
  },[])


  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Services/>
     <Projects/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
