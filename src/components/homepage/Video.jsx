import { ParallaxBanner } from "react-scroll-parallax"

const Video = () => {
    return (
        <div className=' lg:text-6xl md:text-5xl text-3xl font-medium flex flex-col -gap-10 items-center justify-center w-full'>
        <div className='flex items-center'>
        <ParallaxBanner
           
        >
            <div>
                        <img   src="./images/end1.png" />
                        </div>
        </ParallaxBanner>
        </div>
        </div>
    )
}

export default Video