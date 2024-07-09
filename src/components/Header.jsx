import React, { useState } from 'react';
import header_img from './../assets/png/header.png'
import './../index.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const timeline = gsap.timeline({})
    useGSAP(() => {
        // one
        timeline
            // one
            // .from('.NavbarLogo', { y: -200, delay: 0.5, opacity: 0 })
            .from('.NavbarLink', { y: -200, delay: 0.2, opacity: 0, stagger: 0.1, })
            .from('.header_content h1, .header_content h3', {
                opacity: 0,
                x: -200,
                stagger: 0.2
            })
            .from('.buttons-combo', { y: -40, opacity: 0, stagger: 0.1, })
            .from('.header_img', { y: -40, opacity: 0, stagger: 0.1, })
    });

    return (
        <>
            <div className='font-Poppins'>
                <nav className="bg-white font-Poppins">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center justify-between w-full py-5 md:border-b-[1px] border-[#E3E3E3] NavbarLink">
                                {/* Logo */}
                                <div className='NavbarLink'>
                                    <a href="#" className="flex items-center text-gray-700 ">
                                        <span className="font-bold text-xl">MyLogo</span>
                                    </a>
                                </div>

                                {/* Primary Nav */}
                                <div className="hidden md:flex items-center space-x-8 lg:space-x-14 font-medium ">
                                    <a href="#" className=" text-black font-medium text-sm lg:text-base hover:text-[#FFB423] duration-300 transition-colors NavbarLink">Twitter</a>
                                    <a href="#" className=" text-black font-medium text-sm lg:text-base hover:text-[#FFB423] duration-300 transition-colors NavbarLink">Discord</a>
                                    <a href="#" className=" text-black font-medium text-sm lg:text-base hover:text-[#FFB423] duration-300 transition-colors NavbarLink">Docs</a>
                                </div>
                                {/* Secondary Nav */}
                                <div className="hidden md:flex items-center space-x-1 NavbarLink">
                                    <a
                                        href="#"
                                        className="py-2 lg:py-3 px-4 lg:px-6 bg-[#171717] border border-[#171717] hover:shadow-sm hover:bg-white duration-300 transition-all hover:text-black text-sm lg:text-base font-medium text-white rounded-full"
                                    >
                                        Launch App
                                    </a>
                                </div>
                            </div>


                            {/* Mobile button */}
                            <div className="md:hidden flex items-center">
                                <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden absolute z-10 w-full bg-white shadow-sm flex flex-col gap-[5px]" >
                            <a href="#" className="block py-2 px-4 text-sm hover:text-[#FFB423] duration-300 transition-colors">Home</a>
                            <a href="#" className="block py-2 px-4 text-sm hover:text-[#FFB423] duration-300 transition-colors">About</a>
                            <a href="#" className="block py-2 px-4 text-sm hover:text-[#FFB423] duration-300 transition-colors">Contact</a>
                            <a href="#" className="block py-2.5 px-4 text-sm lg:py-3 hover:text-black hover:bg-[#FFB423] duration-300 transition-all lg:px-6 bg-[#171717] lg:text-base font-medium text-white">Launch App</a>
                        </div>
                    )}
                </nav>
                <div className='container px-4 mx-auto font-Poppins'>
                    <div className='flex-col lg:flex-row flex  items-center gap-5 justify-evenly lg:justify-between custom-height'>
                        <div className='flex flex-col lg:items-start items-center gap-4 xl:gap-7 header_content'>
                            <h1 className='text-2xl md:text-3xl xl:text-[32px] max-w-[340px] md:max-w-[500px] xl:!leading-[46px] w-full text-[#161616] font-bold text-center lg:text-start'>The First Al-Powered Decentralized Marketplace</h1>
                            <h3 className='text-[#9a9a9a] text-sm xl:text-lg max-w-[280px] md:max-w-[380px] lg:max-w-[460px] w-full text-center lg:text-start'>Buy. Sell. Experience the world. Transact in crypto. Only
                                with dMarqt.</h3>
                            <div className='flex gap-4 items-center buttons-combo'>
                                <button className='bg-[#FFB423] border-[#ffb423] border hover:bg-white duration-300 transition-all hover:shadow-sm py-3 px-6 font-medium text-[#171717] rounded-full text-xs md:text-sm xl:text-base opacity-1'>Launch App</button>

                                <button className='bg-[#171717] border hover:bg-white hover:text-black duration-300 transition-all border-[#171717] py-3 px-6 font-medium text-white rounded-full text-xs md:text-sm xl:text-base hover:shadow-sm opacity-1'>Learn More</button>
                            </div>
                        </div>
                        <div className='max-w-[550px] xl:max-w-[850px] w-full -mr-0 lg:-mr-16 xl:-mr-24 header_img'>
                            <img src={header_img} alt='image' className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
