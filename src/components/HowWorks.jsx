import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'

const HowWorks = () => {
    gsap.registerPlugin(ScrollTrigger);
    // const isMobile = window.matchMedia("(max-width: 425px)").matches;
    // console.log(isMobile);
    useGSAP(() => {
        let HowWorks = document.querySelector('.howworks');
        gsap.to('.howworks', {
            x: () => HowWorks.scrollWidth * -1,
            xPercent: 100,
            scrollTrigger: {
                trigger: '.howworks',
                start: 'center center',
                // scroller: '.scroll-container',
                end: '+=2000px',
                pin: '#howworks-section',
                scrub: 2,
                yoyo: true,
                ease: "power4.out",
                invalidateOnRefresh: true,
                // markers: true,
            },

        });
    }, []);
    useGSAP(() => {
        const timeline3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.red-section',
                start: 'top 50%',
                end: '+=2000px',
                scrub: 2,
                yoyo: true,
                ease: "power4.out",
                // markers: true,
            },
        });
        // one
        timeline3
            // one
            .from('.How_works_main_heading', { y: -200, delay: 0.5, opacity: 0, stagger: 0.4 })
            .from('.circle', { x: -200, delay: 0.5, opacity: 0 })
            .from('.border-animation', { x: -200, delay: 0.5, opacity: 0 })
            .from('.border-after', { opacity: 0 })

            .from('.circle2', { x: -200, delay: 0.5, opacity: 0 })
            .from('.border-animation2', { x: -200, delay: 0.5, opacity: 0 })
            .from('.border-after2', { opacity: 0 })

            .from('.circle3', { x: -200, delay: 0.5, opacity: 0 })
            .from('.border-animation3', { x: -200, delay: 0.5, opacity: 0 })
            .from('.border-after3', { opacity: 0 })

            .from('.circle4', { x: -200, delay: 0.5, opacity: 0 })
    });
    // if (!isMobile) {

    // }

    return (
        <>
            <section id="howworks-section" className='container px-4 mx-auto font-Poppins py-12 md:py-28'>
                <div className='flex justify-between items-center mb-10 md:mb-20 How_works_main_heading'>
                    <h2 className='text-xl md:text-3xl xl:text-4xl font-bold '>Here's how it works</h2>
                    <button className='bg-[#171717]  border-[#171717] border hover:bg-white hover:text-black duration-300 transition-all py-2 xl:py-3 text-sm xl:text-base px-5 xl:px-6 font-semibold text-white rounded-full'>Learn More</button>
                </div>

                <div className='overflow-hidden relative'>
                    <div className='howworks'>
                        {/* <div className='w-12'>
                            <div className='absolute left-6 border-dashed h-[85%] w-[1px] z-10 border-l border-[1px] flex border-black'></div>
                        </div> */}
                        <div className='grid md:grid-cols-4 md:gap-0 gap-5 red-section'>
                            {/* 1 */}
                            <div className='flex items-center md:block gap-5 relative'>
                                <div className='relative z-10'>
                                    <div className='hidden md:block absolute border-animation border-dashed -z-[8] left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] border-[1px] border-black w-full '></div>
                                    <div className='border-after'>
                                        <div className='block md:hidden before:absolute before:content-[""] before:border-[1px] before:border-black before:border-l-[1px] before:h-full before:w-[1px] before:left-1/2 before:-translate-x-[50%] before:border-dashed before:top-3/4 before:-z-10 '>
                                        </div>

                                    </div>
                                    <div className='bg-[#FFB423] h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 flex items-center justify-center rounded-full border-[2px] border-black circle'>
                                        <p className='text-sm xl:text-lg font-semibold '>01</p>
                                    </div>
                                </div>
                                <div className='md:max-w-[160px] lg:max-w-[220px] xl:max-w-[320px] w-full md:mt-7 circle'>
                                    <h5 className='text-sm xl:text-lg font-semibold mb-2 md:mb-3'>Connect Your Wallet</h5>
                                    <p className='text-xs xl:text-base text-[#808080]'>Lorem ipsum dolor sit amet consectetur. Aliquam.</p>
                                </div>
                            </div>
                            {/* <div className='h-14 top-0 w-12 flex items-center justify-center'>
                                <div className='border-dashed h-[50px] w-[1px] z-50 border-l border-[1px] flex border-black'>
                                </div>
                            </div> */}
                            {/* 2 */}
                            <div className='flex items-center md:block gap-5'>
                                <div className='relative z-10'>
                                    <div className='hidden md:block absolute border-animation2 -z-[8] left-[50%] top-[50%] -translate-y-[50%] border-dashed -translate-x-[50%] border-[1px] border-black w-full'></div>
                                    <div className='border-after2'>
                                        <div className='block md:hidden before:absolute before:content-[""] before:border-[1px] before:border-black before:border-l-[1px] before:h-full before:w-[1px] before:left-1/2 before:-translate-x-[50%] before:border-dashed before:top-3/4 before:-z-10 '>
                                        </div>

                                    </div>
                                    <div className='bg-[#FFB423] h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 flex items-center justify-center rounded-full border-[2px] border-black circle2'>
                                        <p className='text-sm xl:text-lg font-semibold '>02</p>
                                    </div>
                                </div>
                                <div className='md:max-w-[160px] lg:max-w-[200px] xl:max-w-[280px] w-full md:mt-7 circle2'>
                                    <h5 className='text-sm xl:text-lg font-semibold mb-2 md:mb-3'>Browse & Discover</h5>
                                    <p className='text-xs xl:text-base text-[#808080]'>Explore a vast selection of goods
                                        and services, all priced in your
                                        favorite cryptocurrencies.</p>
                                </div>
                            </div>
                            {/* <div className='h-12 w-12 flex items-center justify-center'>
                                <div className='border-dashed h-[50px] w-[1px] z-50 border-l border-[1px] flex border-black'>
                                </div>
                            </div> */}
                            {/* 3 */}
                            <div className='flex items-center md:block gap-5'>
                                <div className='relative z-10'>
                                    <div className='hidden md:block absolute border-animation3 -z-[8] left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] border-[1px] border-dashed border-black w-full'></div>
                                    <div className='border-after3'>
                                        <div className='block md:hidden before:absolute before:content-[""] before:border-[1px] before:border-black before:border-l-[1px] before:h-full before:w-[1px] before:left-1/2 before:-translate-x-[50%] before:border-dashed before:top-3/4 before:-z-10 '>
                                        </div>

                                    </div>
                                    <div className='bg-[#FFB423] h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 flex items-center justify-center rounded-full border-[2px] border-black circle3'>
                                        <p className='text-sm xl:text-lg font-semibold '>03</p>
                                    </div>
                                </div>
                                <div className='md:max-w-[160px] lg:max-w-[200px] xl:max-w-[260px] md:mt-7 circle3'>
                                    <h5 className='text-sm xl:text-lg font-semibold mb-2 md:mb-3'>Transact Directly</h5>
                                    <p className='text-xs xl:text-base text-[#808080]'>Purchase items with a simple
                                        click, using your crypto wallet for
                                        instant, secure payments.</p>
                                </div>
                            </div>
                            {/* <div className='h-12 w-12 flex items-center justify-center'>
                                <div className='border-dashed h-[50px] w-[1px] z-50 border-l border-[1px] flex border-black'>
                                </div>
                            </div> */}
                            {/* 4 */}
                            <div className='flex items-start md:block gap-5'>
                                <div className='relative z-10'>
                                    <div className='bg-[#FFB423] h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 flex items-center justify-center rounded-full border-[2px] border-black circle4'>
                                        <p className='text-sm xl:text-lg font-semibold '>04</p>
                                    </div>
                                </div>
                                <div className='md:max-w-[160px] lg:max-w-[230px] xl:max-w-[280px] w-full md:mt-7 circle4'>
                                    <h5 className="text-sm xl:text-lg font-semibold mb-2 md:mb-3">Rate & Review</h5>
                                    <p className='text-xs xl:text-base text-[#808080]'>Build trust within the community
                                        by sharing your experiences and
                                        rating buyers and sellers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWorks
