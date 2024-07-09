import React from 'react'
import Decentralized_img from './../assets/png/section_two.png';

const Decentralized = () => {
    return (
        <>
            <div className='container px-4 mx-auto font-Poppins'>
                <div className='grid md:grid-cols-2 items-center py-10 md:py-20 xl:h-screen gap-12 md:gap-4 lg:gap-8'>
                    <div className='max-w-[350px] mx-auto md:max-w-[800px] w-full'>
                        <img src={Decentralized_img} alt="img" className='h-full w-full' />
                    </div>
                    <div className='flex flex-col xl:ml-auto'>
                        <div className='mb-2 lg:mb-6'>
                            <h2 className='text-xl lg:text-2xl xl:text-[2vw] xl:!leading-[70px] font-bold '> Decentralized, yet dependable</h2>
                            <h2 className='text-[#FFB423] text-xl lg:text-2xl xl:text-[2vw] font-bold '>The marketplace you can trust.</h2>
                        </div>
                        <div className='flex flex-col gap-2 lg:gap-5'>
                            <p className='text-sm lg:text-base xl:text-lg max-w-[380px] xl:max-w-[550px] w-full '>dMarqt is the center of a huge global crypto commerce movement.
                                It's about cutting out the middleman: payment processors, platform
                                fees, and delays to receive your order confirmation... And getting
                                straight to the good stuff: buying and selling anything in the world,
                                using your crypto wallet.</p>
                            <p className='text-sm lg:text-base xl:text-lg max-w-[380px] xl:max-w-[550px] w-full'>It's a new frontier, and like any new frontier - it needs rules and a basis
                                for trust. In dMarqt, our trust is powered by a dynamic Al model that
                                rigorously polices content and scans for fraud, creating a more
                                liberated way to trade, with even more assurance and trust built into
                                every layer than you'd find with a traditional online marketplace.</p>
                            <p className='text-[#575757] text-sm lg:text-base xl:text-lg font-bold'>It is pure. Unrivaled. Simplicity. And security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Decentralized
