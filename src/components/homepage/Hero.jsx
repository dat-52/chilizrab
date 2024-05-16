import {  ParallaxBanner } from "react-scroll-parallax"

const Hero = () => {
    return (
        <ParallaxBanner
            layers={[
                { image: '/images/apppp.jpeg', speed: -20 },
            ]}
            className="lg:aspect-[2/1] bg-white md:aspect-[4/3] aspect-[2/3]"
        >
           
                <div className='lg:h-[30rem] h-[20rem] absolute lg:right-[2rem] md:right-[10rem] right-2 top-[-0rem] z-0'>
                    
                    
                       
                        
                            {/* <img src="/images/astro2.png" alt="space ship" className='  lg:h-[30rem] h-[20rem] absolute lg:right-[2rem] md:right-[10rem] right-2 top-[-0rem] z-0'  /> */}
                            <div className='bg-white px-4 py-1 rounded-md text-sm'>
                            <h1 className='text-red-400 lg:text-8xl md:text-6xl text-5xl font-medium italic mt-4'>CHILIZRAB </h1>
                        </div>
                        

                        

                        
                    </div>
                    
                
         
        </ParallaxBanner>
    )
}

export default Hero