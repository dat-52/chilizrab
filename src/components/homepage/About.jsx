import { Parallax } from 'react-scroll-parallax'

const About = () => {
    return (
        <div id="about" className='bg-black flex   items-center justify-evenly py-16 lg:gap-10 md:gap-10 gap-16'>
            
            <Parallax  speed={-9}>
                <div>
                    <img src="/images/letter-d.png"  />
                </div>
            </Parallax>
            
        </div>
    )
}

export default About