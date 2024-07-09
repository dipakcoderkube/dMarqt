import React from 'react'
import about from './../assets/svg/about.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const About_us = () => {

    gsap.registerPlugin(ScrollTrigger);
    // const isMobile = window.matchMedia("(max-width: 425px)").matches;
    // console.log(isMobile);
    useGSAP(() => {
        const AboutUs = gsap.timeline({
            scrollTrigger: {
                trigger: '#AboutUS',
                start: 'top 50%',
                end: 'bottom 100%',
                scrub: 2,
                yoyo: true,
                ease: "power4.out",
                // markers: true,
            },
        });
        // one
        AboutUs
            // one
            .from('.about_img', {
                opacity: 0,
                y: -100,
                duration: 0.8,
            })
            .from('.Abouts_content> h3', {
                y: -100,
                delay: 0.2,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
            })
            .from('.about_sub_heading> p', {
                y: -50,
                opacity: 0,
                stagger: 0.4,
                duration: 0.8,
            })



    });
    return (
        <>
            <div className='grid md:grid-cols-2 items-center md:gap-8 lg:gap-20 xl:gap-52 py-10 md:py-12 lg:py-16 xl:py-0 xl:h-screen font-Poppins' id='AboutUS'>
                <div className='w-full about_img'>
                    <img src={about} alt="img" className='w-full h-full' />
                </div>
                <div className='Abouts_content'>
                    <h3 className='text-3xl xl:text-[40px] font-bold mb-7 text-[#161616] pr-8 xl:pr-0 pl-4 md:pl-0'>Learn more <span className='text-[#FFB423]'>about us</span></h3>
                    <div className='max-w-[480px] w-full pr-8 xl:pr-0 pl-4 md:pl-0 about_sub_heading'>
                        <p className='text-[#808080] text-sm lg:text-base xl:text-lg leading-6 mb-2'>
                            Lorem ipsum dolor sit amet consectetur. Molestie
                            placerat justo aliquet tellus felis ornare dignissim
                            sapien. Urna sed enim neque neque urna varius
                            diam vitae. Tortor vel nunc quis urna metus feugiat
                            leo proin.</p>
                        <p className='text-[#808080] text-sm lg:text-base xl:text-lg leading-6'>Lorem ipsum dolor sit amet consectetur. Molestie
                            placerat justo aliquet tellus felis ornare dignissim
                            sapien. Urna sed enim neque neque urna varius
                            diam vitae. Tortor vel nunc quis urna metus feugiat
                            leo proin. Mi feugiat dictum mauris turpis donec
                            egestas. Tempor ipsum ut habitasse viverra.
                            Accumsan.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_us
