import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import wallet from './../assets/png/wallet.png';
import dot from "./../assets/svg/dots.svg";
import { useGSAP } from '@gsap/react';

const FeatureList = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let horizontalSection = document.querySelector('.horizontal');
        let secondSection = document.querySelector('.second-section');
        gsap.to('.horizontal', {
            x: () => horizontalSection.scrollWidth * -1,
            xPercent: 100,
            scrollTrigger: {
                trigger: '.horizontal',
                start: 'center center',
                duration: 2,
                end: '+=3000px',
                pin: '#horizontal-scroll',
                scrub: 2,
                invalidateOnRefresh: true,
                // markers: true,
            },
        });
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.second-section',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                duration: 2
                // markers: true,
            }
        });

        tl2.from('.second-section', {
            scale: 0.7,
            opacity: 0,
        });
    }, []);





    return (

        <section id="horizontal-scroll" className="py-12 md:py-20 container px-4 mx-auto overflow-hidden font-Poppins ">
            <div className='second-section'>
                <h3 className='text-center text-2xl xl:text-4xl font-semibold text-[#161616] mb-2 md:mb-4 lg:mb-6'>Our Core Features</h3>
                <p className='text-sm lg:text-base max-w-[690px] break-keep mx-auto text-center text-[#9b9b9b] font-medium mb-14'>Experience a new era of smarter, safer transactions powered by truly one-of-a-kind Al and enjoy unlimited freedom to buy and sell with your crypto.</p>
            </div>
            <div className="overflow-hidden">
                <div className="horizontal flex h-full gap-4">
                    {/* 1 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    AI-Driven Content Moderation
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">Only genuine products and service listings make it through our filter. Behind the scenes, our AI models scan for suspicious activity, eliminating bad actors while also sharpening the overall quality of listings. As a result, what you see is what you get.</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    Direct Crypto Payments
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">No middlemen, no hassles.NO payment gateways! It simple: on dMarqt you get a direct transaction between buyer and seller without fees It s "single click" convenient.</p>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    Direct Crypto Payments
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">Expand your horizons and build trust within the community with global buyers and sellers.Your reviews will act as your "social credit score" displaying your trustworthiness on our platform.</p>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    Direct Crypto Payments
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">Expand your horizons and build trust within the community with global buyers and sellers.Your reviews will act as your "social credit score" displaying your trustworthiness on our platform.</p>
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    AI-Driven Content Moderation
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">Only genuine products and service listings make it through our filter. Behind the scenes, our AI models scan for suspicious activity, eliminating bad actors while also sharpening the overall quality of listings. As a result, what you see is what you get.</p>
                            </div>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    Direct Crypto Payments
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">No middlemen, no hassles.NO payment gateways! It simple: on dMarqt you get a direct transaction between buyer and seller without fees It s "single click" convenient.</p>
                            </div>
                        </div>
                    </div>
                    {/* 7 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    Direct Crypto Payments
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">Expand your horizons and build trust within the community with global buyers and sellers.Your reviews will act as your "social credit score" displaying your trustworthiness on our platform.</p>
                            </div>
                        </div>
                    </div>
                    {/* 8 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    Direct Crypto Payments
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">Expand your horizons and build trust within the community with global buyers and sellers.Your reviews will act as your "social credit score" displaying your trustworthiness on our platform.</p>
                            </div>
                        </div>
                    </div>
                    {/* 9 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    AI-Driven Content Moderation
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">Only genuine products and service listings make it through our filter. Behind the scenes, our AI models scan for suspicious activity, eliminating bad actors while also sharpening the overall quality of listings. As a result, what you see is what you get.</p>
                            </div>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className=' flex-shrink-0 px-2 first:pl-4 last:pr-4'>
                        <div className='flex items-stretch '>
                            <div className="flex flex-col min-w-[82vw] md:min-w-[44vw] lg:min-w-[30vw] xl:min-w-[18vw] w-[82vw] md:w-[44vw] lg:w-[30vw] xl:w-[18vw] font-Poppins">
                                <div className='bg-[#FFB423] border-2 rounded-2xl border-black h-[230px] flex items-center justify-center overflow-hidden relative'>
                                    <img src={dot} alt="" className='absolute top-0 left-0 w-full object-cover opacity-60' />
                                    <div className='max-w-32 w-full relative z-[9]'>
                                        <img className="w-full h-full object-cover" src={wallet} alt="Feature" />
                                    </div>
                                </div>
                                <h2 className="text-base 2xl:text-lg font-semibold text-black py-4">
                                    Direct Crypto Payments
                                </h2>
                                <p className="text-gray-500 text-sm 2xl:text-base">No middlemen, no hassles.NO payment gateways! It simple: on dMarqt you get a direct transaction between buyer and seller without fees It s "single click" convenient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureList;
