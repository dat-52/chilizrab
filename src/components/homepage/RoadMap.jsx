import { Parallax } from 'react-scroll-parallax'


const RoadMap = () => {
    return (
        <div className='bg-black py-16'>
           
           <Parallax speed={-3}>
             <div className='flex items-center justify-center text-center gap-3 flex-col mb-20'>
                
                <p className='text-4xl font-medium'> <span className=''> ROADMAP</span></p>
            </div>
           </Parallax>

            <div className='flex flex-wrap  justify-evenly gap-10 gap-y-20  py-18'>
                <Step1 />
                <Step2 />
                <Step3 />
            </div>
        </div>
    )
}

function Step1() {
    return (
        <div>
           
           <img className='w-36' src="/images/logo2.png" alt="step" />
            <p className='text-black-500 mt-3'></p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>PHASE 1</h3>
            <div className='flex flex-col gap-3'>
                <p>
                💚 BUILDING WEBSITE.
                </p>
                
                <p>
                💚 COMMUNITY MARKETING.
                </p>
                <p>
                💚 PUBLIC SALE.
                </p>
                
              
            </div>
        </div>
    )
}

function Step2() {
    return (
        <div>
            <img className='w-36' src="/images/logo2.png" alt="step" />
            <p className='text-black-500 mt-3'></p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>PHASE 2</h3>
            <div className='flex flex-col gap-3'>
            <p>
                💚 FAME NFT COLLECTION.
                </p>
                <p>
                💚 FAME STORE.
                </p>
                <p>
                💚 PARTNERSHIPS.
                </p>
                <p>
                💚 COINGECKO LISTING.
                </p>
                <p>
                💚COINMARKETCAP LISTING
                </p>
            </div>
             
        </div>
    )
}

function Step3() {
    return (
        <div>
            
            <img className='w-36' src="/images/logo2.png" alt="step" />
            <p className='text-black-500 mt-3'></p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>PHASE 3</h3>
            <div className='flex flex-col gap-3'>
            <p>
                💚 CEX LISTING.
                </p>
                <p>
                💚 MAJOR MARKETING PUSH.
                </p>
                <p>
                💚 TIER 1 CEX LISTING .
                </p>
                <p>
                💚 CONTINUED GROWTH.
                </p>
                   
               
                
            </div>
        </div>
    )
}


export default RoadMap