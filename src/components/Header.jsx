import React, { useState } from 'react';
import header_img from './../assets/png/header.png'
import './../index.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='font-Poppins'>
                <nav className="bg-white font-Poppins">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center justify-between w-full py-5 md:border-b-[1px] border-[#E3E3E3]">
                                {/* Logo */}
                                <div>
                                    <a href="#" className="flex items-center text-gray-700">
                                        <span className="font-bold text-xl">MyLogo</span>
                                    </a>
                                </div>

                                {/* Primary Nav */}
                                <div className="hidden md:flex items-center space-x-8 lg:space-x-14 font-medium">
                                    <a href="#" className=" text-black font-medium text-sm lg:text-base ">Twitter</a>
                                    <a href="#" className=" text-black font-medium text-sm lg:text-base">Discord</a>
                                    <a href="#" className=" text-black font-medium text-sm lg:text-base">Docs</a>
                                </div>
                                {/* Secondary Nav */}
                                <div className="hidden md:flex items-center space-x-1">
                                    <a
                                        href="#"
                                        className="py-2 lg:py-3 px-4 lg:px-6 bg-[#171717] text-sm lg:text-base font-medium text-white rounded-full"
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
                        <div className="md:hidden absolute w-full bg-white shadow-sm flex flex-col gap-[5px]" >
                            <a href="#" className="block py-2 px-4 text-sm">Home</a>
                            <a href="#" className="block py-2 px-4 text-sm">About</a>
                            <a href="#" className="block py-2 px-4 text-sm">Contact</a>
                            <a href="#" className="block py-2.5 px-4 text-sm lg:py-3  lg:px-6 bg-[#171717] lg:text-base font-medium text-white">Sign Up</a>
                        </div>
                    )}
                </nav>
                <div className='container px-4 mx-auto'>
                    <div className='flex-col lg:flex-row flex  items-center gap-5 justify-evenly lg:justify-between custom-height'>
                        <div className='flex flex-col lg:items-start items-center gap-4 xl:gap-6'>
                            <h1 className='text-2xl xl:text-4xl max-w-[480px] w-full text-[#161616] font-bold text-center lg:text-start'>The First Al-Powered Decentralized Marketplace</h1>
                            <h3 className='text-[#9a9a9a] text-sm xl:text-lg max-w-[380px] lg:max-w-[460px] w-full text-center lg:text-start'>Buy. Sell. Experience the world. Transact in crypto. Only
                                with dMarqt.</h3>
                            <div className='flex gap-4 items-center'>
                                <button className='bg-[#FFB423] py-3 px-6 font-medium text-[#171717] rounded-full text-xs md:text-sm xl:text-base'>Launch App</button>

                                <button className='bg-[#171717] py-3 px-6 font-medium text-white rounded-full text-xs md:text-sm xl:text-base'>Learn More</button>
                            </div>
                        </div>
                        <div className='max-w-[550px] xl:max-w-[700px] w-full'>
                            <img src={header_img} alt='image' className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
