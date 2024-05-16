import Marquee from "react-fast-marquee";

function Partners() {
    return (
        <div className="bg-black py-16 ">
           

            <div className='flex items-center justify-center text-center gap-3 flex-col mb-24'>
                
                <p className='text-4xl font-medium'>OUR <span className=''>PARTNERS</span></p>
            </div>

            <Marquee autoFill={true} className="lg:mb-12 md:mb-10 mb-6" pauseOnHover={true}>
            <div className="lg:m-10 md:m-8 m-6">
                    <img src="data:image/png;base64,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" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.kewl.exchange/assets/kewl-pink.2b9fd4ef.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://s.geckoterminal.com/_next/static/media/logo_dark.6b1547fe.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="data:image/png;base64,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" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://p2pb2b.com/blog/wp-content/themes/p2pb2b-blog/assets/img/logo.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                 <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://cdn.worldvectorlogo.com/logos/coingecko-1.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
            </Marquee>

            <Marquee direction="right" autoFill={true} pauseOnHover={true}>
            
            <div className="lg:m-10 md:m-8 m-6">
                    <img src="data:image/png;base64,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" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://www.kewl.exchange/assets/kewl-pink.2b9fd4ef.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://s.geckoterminal.com/_next/static/media/logo_dark.6b1547fe.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="data:image/png;base64,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" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://p2pb2b.com/blog/wp-content/themes/p2pb2b-blog/assets/img/logo.png" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
                 <div className="lg:m-10 md:m-8 m-6">
                    <img src="https://cdn.worldvectorlogo.com/logos/coingecko-1.svg" className="lg:h-12 md:h-10 h-8" alt="logo" />
                </div>
            </Marquee>

        </div>
    )
}

export default Partners
