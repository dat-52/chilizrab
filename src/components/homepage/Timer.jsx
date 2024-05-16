import {  Parallax } from "react-scroll-parallax"

const Timer = () => {
    return (
        <div id="Timer" className='bg-black flex lg:flex-row md:flex-row flex-col items-center justify-evenly py-16 lg:gap-10 md:gap-10 gap-16'>
            
            <Parallax  speed={-9}>
                <div>
                    <img src="/images/astro2.jpg"  />
                </div>
            </Parallax>
            
        </div>
    )
}

export default Timer