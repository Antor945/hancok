import Navar from "./components/NavBar/Navar"
import Headers from "./components/Header/Headers"
import Supply from "./components/Supply/Supply"
import Slider from "./components/Slider/Slider"
import Services from "./components/Services/Services"
import Banner from "./components/Banner/Banner"
import About from "./components/About/About"
import Petromaax from "./components/Petromax/Petromaax"
import Blog from "./components/Blog/Blog"
import Maps from "./components/Maps/Maps"
import Footer from "./components/Footer/Footer"

function App() {

  return (
   <>
   <Headers></Headers>
   <Navar></Navar>
   <Banner></Banner>
   <Supply></Supply>
   <Slider></Slider>
   <Services></Services>
   <About></About>
   <Petromaax></Petromaax>
   <Blog></Blog>
   <Maps></Maps>
   <Footer></Footer>
   </>
  )
}

export default App
