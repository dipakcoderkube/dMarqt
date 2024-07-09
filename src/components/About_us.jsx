import React from 'react'
import about from './../assets/svg/about.svg'

const About_us = () => {
    return (
        <>
            <div className='grid md:grid-cols-2 items-center md:gap-8 lg:gap-20 xl:gap-56 py-10 lg:py-0 lg:h-screen font-Poppins'>
                <div className='w-full'>
                    <img src={about} alt="img" className='w-full h-full' />
                </div>
                <div className=''>
                    <h3 className='text-3xl xl:text-[40px] font-bold mb-7 text-[#161616] pr-8 xl:pr-0 pl-4 md:pl-0'>Learn more <span className='text-[#FFB423]'>about us</span></h3>
                    <div className='max-w-[480px] w-full pr-8 xl:pr-0 pl-4 md:pl-0'>
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
