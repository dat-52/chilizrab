import { Parallax } from 'react-scroll-parallax';

// Function để render mỗi bước token với hình ảnh
const renderTokenStep = (imageSrc, title, description) => {
    return (
        <div className="flex flex-col items-center mx-4">
            <div className="bg-green-400 w-60 h-60 flex items-center justify-center rounded-lg mb-4 overflow-hidden">
                <img src={imageSrc} alt={title} className="h-48 w-48 object-cover" />
            </div>
            <h2 className="text-lg lg:text-xl font-bold text-green-400 mb-2">{title}</h2>
            <p className="text-center text-gray-400">{description}</p>
        </div>
    );
}

const Tokenomics = () => {
    return (
        <div className="bg-black py-20">
            <Parallax speed={0.5}>
                <div className="flex items-center justify-center text-center mb-20">
                    <p className="text-5xl font-medium text-white">TOKENOMIC</p>
                </div>
            </Parallax>
            <div className="flex flex-wrap  justify-evenly gap-10 gap-y-20  py-18 ">
                {renderTokenStep("./images/t1.png", "5% CORE TEAM")}
                {renderTokenStep("./images/t3.png", "5% AIRDROP ")}
                {renderTokenStep("./images/t2.png", "90% LP BURN ")}
                
            </div>
        </div>
    );
};

export default Tokenomics;
