import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';

const Hero = () => {
    return (

        <>
            <main className='h-screen w-screen overflow-hidden'>
                <main className="m-2 sm:m-4 bg-[#f3fca0] rounded-[50px] sm:rounded-[100px] h-[calc(100vh-4rem)] sm:h-[calc(100vh-8rem)]">
                    <section
                        className='text-[40px] font-extrabold tracking-wider sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[138px] flex flex-col items-center justify-center text-[rgb(239,243,177)] tracking-tighter font-alfa relative rounded-[50px] sm:rounded-[100px] h-full'
                        style={{
                            backgroundImage: 'url(/plastic.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div
                            className="absolute inset-0 rounded-[50px] sm:rounded-[100px]"
                            style={{
                                backgroundColor: '#f3fca0',
                                opacity: 0.9
                            }}
                        ></div>

                        {/* Text box 1 - Responsive positioning */}
                        <div className="absolute top-4 left-4 sm:top-12 md:top-24 lg:top-48 sm:left-6 md:left-8 lg:left-16 z-20 bg-opacity-20 rounded-lg p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg lg:text-xl tracking-normal font-medium text-[#1e2e12] font-alfo w-[calc(100%-2rem)] sm:w-80 md:w-96">
                            <p>What makes my photography unique is the combination of technical expertise and personal touch</p>
                        </div>

                        {/* Social Icons - Responsive positioning */}
                        <div className='absolute top-32 left-20 sm:top-76  z-20 flex flex-row gap-3 sm:gap-4'>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#1e2e12] rounded-full flex items-center justify-center hover:bg-[#2a3d1a] transition-colors cursor-pointer'>
                                <GitHubIcon className='text-[#f3fca0] text-xl sm:text-2xl' />
                            </div>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#1e2e12] rounded-full flex items-center justify-center hover:bg-[#005885] transition-colors cursor-pointer'>
                                <LinkedInIcon className='text-[#f3fca0] text-xl sm:text-2xl' />
                            </div>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#1e2e12] rounded-full flex items-center justify-center hover:bg-[#0d8bd9] transition-colors cursor-pointer'>
                                <XIcon className='text-[#f3fca0] text-xl sm:text-xl' />
                            </div>
                        </div>

                        {/* Text box 2 - Responsive positioning */}
                        <div className="absolute bottom-8 right-32 sm:bottom-24 md:bottom-20 lg:bottom-10 sm:right-16 md:right-18 z-20 bg-opacity-20 rounded-lg p-2 sm:p-3 md:p-4 text-sm sm:text-base md:text-lg lg:text-xl tracking-normal text-[#1e2e12] font-alfo font-medium w-[calc(100%-2rem)] sm:w-80 md:w-96 text-right">
                            <p>Immerse yourself in a world where each frame tells a tale, capturing the beautyy fdsg
                                fdsgfds
                                fds
                                f
                            </p>
                        </div>

                        {/* Hero's image - Responsive sizing */}
                        <img
                            src="/hero.png"
                            alt="Hero"
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-32 h-24 sm:w-40 sm:h-32 md:w-52 md:h-40 lg:w-64 lg:h-48 xl:w-180 xl:h-128 object-cover mix-blend-luminosity"
                        />

                        {/* Responsive text stacking */}
                        <div className='text-[#1e2e12] relative z-10 text-center'>
                            <div className='block sm:hidden'>MAYANK</div>
                            <div className='block sm:hidden'>MAHAJAN</div>
                            <div className='hidden  sm:block'>MAYANK MAHAJAN</div>
                        </div>
                        <div className='relative z-10 text-center  hidden md:block'>MAYANK MAHAJAN</div>
                        <div className='relative z-10 text-center hidden lg:block'>MAYANK MAHAJAN</div>
                    </section>
                    
                    <section className='absolute flex justify-around items-center space-x-4 w-[98.5vw] my-12 text-lg text-[#f3fca0] font-alfo font-bold'>
                        <div>About</div>
                        <div>Works</div>
                        <div>Gallery</div>
                        <div>Contact</div>


                    </section>
                </main>
            </main>

        </>
    );
};

export default Hero;