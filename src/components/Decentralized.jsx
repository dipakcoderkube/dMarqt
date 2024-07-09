import React from 'react'
import Decentralized_img from './../assets/png/section_two.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const Decentralized = () => {
    gsap.registerPlugin(ScrollTrigger);
    // const isMobile = window.matchMedia("(max-width: 425px)").matches;
    // console.log(isMobile);
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.Decentralized-section',
                start: 'top 50%',
                end: 'bottom 100%',
                scrub: 2,
                yoyo: true,
                ease: "power4.out",
                // markers: true,
            },
        });
        // one
        timeline
            // one
            .from('.Decen_img', {
                scale: 0.8,
                opacity: 0,
                scrub: 1,
                // delay: 0.2
            })
            .from('.Decentralized', { x: -100, delay: 0.2, opacity: 0 })
            .from('.Decentralized2', { x: -100, opacity: 0 })
            .from('.Decentralized_content', {
                y: -30,
                opacity: 0,
                scrub: 1,
                duration: 1
                // delay: 0.2
            })


    });
    return (
        <>
            <div className='container px-4 mx-auto font-Poppins Decentralized-section'>
                <div className='grid md:grid-cols-2 items-center py-10 md:py-20 xl:h-screen gap-12 md:gap-4 lg:gap-8'>
                    <div className='max-w-[350px] mx-auto md:max-w-[800px] w-full Decen_img'>
                        <img src={Decentralized_img} alt="img" className='h-full w-full' />
                    </div>
                    <div className='flex flex-col xl:ml-auto'>
                        <div className='mb-2 lg:mb-6'>
                            <h2 className='text-xl lg:text-[28px] lg:leading-[50px] xl:text-[1.8vw] xl:!leading-[70px] font-bold  Decentralized'> Decentralized, yet dependable</h2>
                            <h2 className='text-[#FFB423] text-xl lg:text-[28px] xl:text-[1.8vw] font-bold Decentralized2'>The marketplace you can trust.</h2>
                        </div>
                        <div className='flex flex-col gap-2 lg:gap-5 '>
                            <p className='text-sm lg:text-base xl:text-lg max-w-[450px] xl:max-w-[550px] w-full Decentralized_content'>dMarqt is the center of a huge global crypto commerce movement.
                                It's about cutting out the middleman: payment processors, platform
                                fees, and delays to receive your order confirmation... And getting
                                straight to the good stuff: buying and selling anything in the world,
                                using your crypto wallet.</p>
                            <p className='text-sm lg:text-base xl:text-lg max-w-[450px] xl:max-w-[550px] w-full Decentralized_content'>It's a new frontier, and like any new frontier - it needs rules and a basis
                                for trust. In dMarqt, our trust is powered by a dynamic Al model that
                                rigorously polices content and scans for fraud, creating a more
                                liberated way to trade, with even more assurance and trust built into
                                every layer than you'd find with a traditional online marketplace.</p>
                            <p className='text-[#575757] text-sm lg:text-base xl:text-lg font-bold Decentralized_content'>It is pure. Unrivaled. Simplicity. And security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Decentralized
