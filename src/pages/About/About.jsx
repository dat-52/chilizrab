import { Parallax } from 'react-scroll-parallax'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Dashboard/Dashboard.css'

const About = () => {

  

 

  return (
    <div className="pt-20">
      <div className='lg:py-28 md:py-28 py-24 relative'>
        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute left-0 bottom-5' />

        <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
          <img src="./images/wave-pattern.webp" size={17} alt="wave" />
          <p className='lg:text-5xl md:text-4xl text-3xl font-medium'><span className='text-white-500'>About</span> Us</p>
        </div>

        <img style={{
          filter: 'invert(0.2)'
        }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute right-0 top-4' />
      </div>


      <div className='bg-red  relative py-28'>
        <div className='flex items-center justify-evenly'>
          <Parallax
            translateX={['100px', '-50px']}
            translateY={['0px', '50px']}
            scale={[0.75, 1]}
            easing="easeInQuad"
          >
            <div>
              <img src="./images/rocket.webp" alt="rocket" className='w-44' />
            </div>
          </Parallax>
          <div className=' bg-black max-w-lg text-center flex items-center justify-center flex-col gap-5'>
            <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
            <h3 className='text-5xl  font-medium'>
              We are Launching our Meme Coins
            </h3>
            <p className='text-white-500 mt-3'>
            Join the Game with CHILIZ - A Fresh Approach to Cryptocurrency With Constant Innovation and Endless Potential.
            </p>

            <button className='bg-purple-600 hover:bg-purple-700 font-medium px-10 py-3 rounded-xl mt-6'>Explore 😎</button>
          </div>
          <Parallax
            translateX={['-100px', '0px']}
            translateY={['0px', '50px']}
            scale={[0.75, 1]}
            easing="easeInQuad"
          >
            <div>
              <img className='w-44 -rotate-90' src="https://wordpress.iqonic.design/product/wp/ealain/wp-content/uploads/2022/07/shooting-star.webp" alt="meteor" />
            </div>
          </Parallax>
        </div>
      </div>

      <div className='bg-black flex lg:flex-row md:flex-row flex-col items-center justify-evenly py-16 lg:gap-5 md:gap-5 gap-16'>
        <div>
          <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
          <h3 className='text-4xl font-semibold underline-offset-8 mt-4'>
               CHILIZ RAB
          </h3>
          <p className='text-white-500 max-w-sm my-10'>
            
In the heart of a lush, green forest lived a small rabbit . Unlike her fellow rabbits, who were content munching on clover and carrots, she harbored a taste for adventure, especially when it came to her meals.
          </p>
          <button className='bg-purple-600 px-8 py-2 rounded-md text-sm'>Explore 😎</button>
        </div>
        <Parallax speed={-5}>
          <div>
            <img src="/images/letter-d.png" className='px-5' alt="profile pic" />
          </div>
        </Parallax>
        <div className='text-yellow-200 flex flex-col gap-5 font-medium text-lg'>
          <p>
            ✨ 3D Web3 Interfaces
          </p>
          <p>
            ✨ Web3 Integration
          </p>
          <p>
            ✨ User Experience
          </p>
          <p>
            ✨ Meme Coins.
          </p>
        </div>
      </div>


      <div>
        <div className='lg:py-28 md:py-28 py-24 relative'>
          <img style={{
            filter: 'invert(0.2)'
          }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-12 absolute left-0 bottom-5' />

          <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
            <img src="./images/wave-pattern.webp" size={17} alt="wave" />
            <p className='lg:text-5xl md:text-4xl text-3xl font-medium'>Check Out Our <span className='text-purple-500'>Latest NFTs</span></p>
          </div>
        </div>

        

        <div className='flex items-center'>
          <Link className='m-auto' to="/home"><button className='bg-purple-600 px-8 py-2 rounded-md text-sm'>Explore NFT Collection 😎</button></Link>
        </div>
      </div>
    </div>
  )
}



export default About