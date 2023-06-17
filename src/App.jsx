
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Hero from './Components/Hero'
import Service from './Components/Service'
import {Parallax,ParallaxLayer} from "@react-spring/parallax"


function App() {
return (
    <div>
      <Hero/>
      <About/>
      <Gallery/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
