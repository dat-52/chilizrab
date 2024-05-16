import About from "../../components/homepage/About"

import Timer from "../../components/homepage/Timer"

import Hero from "../../components/homepage/Hero"
import Tokenomics from "../../components/homepage/tokenomics"
import Partners from "../../components/homepage/Partners"
import RoadMap from "../../components/homepage/RoadMap"




const Home = () => {
  return (
    <div className="pt-16">
      <Hero/>
      
      <About/>
      <RoadMap/>
      <Tokenomics/>
      
      <Timer/>
      
      
      
      
      <Partners/>
     
    </div>
  )
}

export default Home