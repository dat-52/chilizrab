import { FaTwitter, FaTelegram} from 'react-icons/fa'

const Team = () => {
    return (
        <div id="team" className='bg-red relative py-28'>
            

            <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
               
                <p className='text-4xl font-medium'>OUR <span className=''>TEAM</span></p>
            </div>

            <div className='flex flex-wrap px-10 justify-evenly gap-10 gap-y-20 items-center py-18'>
                <div data-aos="fade-up"  className='flex flex-col items-center gap-3'>
                   
                    <p className='text-3xl font-medium hover:text-purple-500'>TWITTER</p>
                    
                    <div className='flex items-center gap-3'>
                        <a href="https://twitter.com/ChilizRab" target='_blank' rel="noreferrer">
                            <FaTwitter size={22} />
                        </a>
                      
                    </div>
                </div>

                <div data-aos="fade-up"  className='flex flex-col items-center gap-3'>
                   
                    <p className='text-3xl font-medium hover:text-purple-500'>TELEGRAM</p>
                    
                    <div className='flex items-center gap-3'>
                        <a href="https://t.me/ChilizRabchat" target='_blank' rel="noreferrer">
                            <FaTelegram size={22} />
                        </a>
                      
                    </div>
                </div>

                
            </div>
        </div>
    )
}
export default Team
