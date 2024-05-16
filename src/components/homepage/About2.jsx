import { Parallax } from 'react-scroll-parallax'

const About2 = () => {
  return (
    <div className='bg-red relative py-28' style={{backgroundImage: `url('./images/7.png')`}}>
      <div className='flex items-center justify-evenly'>
        <Parallax
          translateX={['100px', '-50px']}
          translateY={['0px', '50px']}
          scale={[0.75, 1]}
          easing="easeInQuad"
        >
          
        </Parallax>
        <div className='max-w-lg text-center flex items-center justify-center flex-col gap-5'>
          <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
          <h3 className='text-5xl  font-medium'>
            <span className='text-purple-500'> </span>HOW TO BUY
          </h3>
          <p className='text-gray-1000 mt-3'>
            
          </p>
          <button className='bg-black-600 hover:bg-black-700 font-medium px-10 py-3 rounded-xl mt-6' style={{ width: '1000px' }}>
             < div className='flex items-center'>
             <img src="./images/1.png" alt="Create a wallet" />
              <h3 className='ml-3'style={{ fontSize: '50px' }}>CREATE A WALLET</h3>
              </div>
          </button>
          <button className='bg-black-600 hover:bg-black-700 font-medium px-10 py-3 rounded-xl mt-6' style={{ width: '1000px' }}>
             < div className='flex items-center'>
             <img src="./images/2.png" alt="Create a wallet" />
              <h1 className='ml-3'style={{ fontSize: '50px' }}> Get Some CHZ </h1>
              </div>
          </button>
          <button className='bg-black-600 hover:bg-black-700 font-medium px-10 py-3 rounded-xl mt-6' style={{ width: '1000px' }}>
             < div className='flex items-center'>
             <img src="./images/3.png" alt="Create a wallet" />
              <h3 className='ml-3'style={{ fontSize: '50px' }}>Go to KEWL EXCHANGE</h3>
              </div>
          </button>
          <button className='bg-black-600 hover:bg-black-700 font-medium px-10 py-3 rounded-xl mt-6' style={{ width: '1000px' }}>
             < div className='flex items-center'>
             <img src="./images/4.png" />
              <h3 className='ml-3'style={{ fontSize: '50px' }}>Switch CHZ for $CHILIZRAB</h3>
              </div>
          </button>

        </div>
       
      </div>
    </div>
  )
}

export default About2