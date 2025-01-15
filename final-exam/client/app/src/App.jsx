
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { TopBox } from './components/TopBox'
import { BodyCards} from './components/BodyCards'
import { DigerCards } from './components/DigerCards'
import { SonCard } from './components/SonCard'

function App() {

  return (
    <>
    <TopBox/>
      <Navbar/>

      <Hero/>

      <BodyCards/>
      <DigerCards/>

      <SonCard/>
    </>
  )
}

export default App
