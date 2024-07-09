import React from 'react'
import star from './../assets/svg/sparkle.svg'
import crypto from './../assets/svg/bitcoin.svg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const WhyChoose = () => {
    // const isMobile = window.matchMedia("(max-width: 425px)").matches;

    useGSAP(() => {
        const timeline_whyChoose = gsap.timeline({
            scrollTrigger: {
                trigger: '.ani-border-section',
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 2,
                yoyo: true,
                ease: "power4.out",
                // markers: true,
            },
        });
        timeline_whyChoose
            .from('.why_heading', { y: -100, opacity: 0 })


        timeline_whyChoose
            .from('.hello', { y: -100, opacity: 0 })
            .from('.starimg', { scale: 0, opacity: 0 }, "-=0.5")
            .from('.line-animation', { x: -300, opacity: 0, delay: 0.5 }, "-=0.5")
            .to('.ani-border', { y: 10, opacity: 0.3, ease: 'power2.inOut' }, "-=0.5")
            .to('.ani-border2', { y: 10, opacity: 0.3, ease: 'power2.inOut' }, "-=0.5")

        timeline_whyChoose
            .from('.hello2', { y: -100, opacity: 0 })
            .from('.starimg2', { scale: 0, opacity: 0 }, "-=0.5")
            .from('.line-animation2', { x: -400, opacity: 0, delay: 0.5 }, "-=0.5")
            .to('.ani-border3', { y: 10, opacity: 0.3, ease: 'power2.inOut' }, "-=0.5")
            .to('.ani-border4', { y: 10, opacity: 0.3, ease: 'power2.inOut' }, "-=0.5")
            .from('.crypto_img', {
                y: -50,
                opacity: 0,
                stagger: 0.4
            })

        timeline_whyChoose
            .to('.ani-border5', { y: 10, opacity: 0.3, ease: 'power2.inOut' }, "-=0.5")
            .from('.hello3', { y: -100, opacity: 0 })
            .from('.starimg3', { scale: 0, opacity: 0 }, "-=0.5")
            .from('.line-animation3', { x: -500, opacity: 0, delay: 0.5 }, "-=0.5");
    });
    // if (!isMobile) {
    // }

    return (
        <>
            <div className='bg-[#191816] font-Poppins ani-border-section overflow-hidden'>
                <div className='container px-4 mx-auto xl:h-screen py-16 lg:py-24 text-white flex flex-col justify-center relative'>
                    <h2 className='text-xl md:text-3xl xl:text-4xl font-bold mb-10 md:mb-20 why_heading'>Why Choose dMarqt</h2>
                    <div className='flex justify-between gap-5 '>

                        <div className='flex flex-col gap-6 md:gap-8 lg:gap-16 relative'>
                            <div className='absolute top-5 ani-border hidden md:block'>
                                {/* 1 */}
                                <div className='border-dashed border-[2px] border-[#FFB423] h-16 w-16 lg:h-24 lg:w-24 rounded-full opacity-0 ani-border'></div>
                                {/* 2 */}
                                <div className='-mt-6 border-dashed border-[2px] border-[#FFB423] h-16 w-16 lg:h-24 lg:w-24 rounded-full ani-border2 opacity-0 flex items-center justify-center'>
                                    <div className='w-6 h-6 rounded-full bg-[#FFB423]'></div>
                                </div>
                                {/* 3 */}
                                <div className='-mt-6 border-dashed border-[2px] border-[#FFB423] h-16 w-16 lg:h-24 lg:w-24 rounded-full opacity-0 ani-border3'></div>
                                {/* 4 */}
                                <div className='-mt-6 border-dashed border-[2px] border-[#FFB423] h-16 w-16 lg:h-24 lg:w-24 rounded-full ani-border4 opacity-0 flex items-center justify-center'>
                                    <div className='w-6 h-6 rounded-full bg-[#FFB423]'></div>
                                </div>
                                {/* 5 */}
                                <div className='-mt-6 border-dashed border-[2px] border-[#FFB423] h-16 w-16 lg:h-24 lg:w-24 ani-border5 rounded-full opacity-0'></div>
                                <div className='-mt-6 flex lg:hidden border-dashed border-[2px] border-[#FFB423] h-16 w-16 lg:h-24 lg:w-24 ani-border5 rounded-full opacity-0'></div>

                            </div>
                            {/* one */}
                            <div className='flex items-center gap-3 md:gap-6 relative z-10 overflow-hidden'>
                                <div className='flex items-center hello'>
                                    <div className='bg-[#FFB423] md:h-16 h-10 w-10 md:w-16 lg:h-24 lg:w-24 rounded-full flex items-center justify-center'>
                                        <div className='max-w-6 md:max-w-8 lg:max-w-16 w-full starimg'>
                                            <img src={star} alt="star" className='h-full w-full' />
                                        </div>
                                    </div>
                                    <div className='h-24 w-8 md:w-16 lg:w-24 rounded-full flex items-center justify-center line-animation'>
                                        <div className='w-full border-[#FFB423] border-dashed border-[1px]'></div>
                                    </div>
                                    <div className='h-2 w-2 md:h-4 md:w-4 bg-[#FFB423] rounded-full line-animation'></div>
                                </div>

                                <div className='max-w-[290px] lg:max-w-[400px] xl:max-w-[500px] w-full wallet-move line-animation overflow-hidden'>
                                    <h4 className='text-sm lg:text-base xl:text-lg font-semibold mb-2.5'>Your Wallet, Your Choice of Coin</h4>
                                    <p className='text-[#AAA9A9] text-xs lg:text-sm xl:text-base'>Here, currency isn't confined to a single chain - you can buy
                                        and sell in ETH, SOL, BTC, USDC, and beyond. Connect, browse,
                                        and transact with your best investments.</p>
                                </div>
                            </div>
                            {/* two */}
                            <div className='flex items-center gap-3 md:gap-6 relative z-10 overflow-hidden'>
                                <div className='flex items-center hello2'>
                                    <div className='bg-[#FFB423] md:h-16 h-10 w-10 md:w-16 lg:h-24 lg:w-24 rounded-full flex items-center justify-center'>
                                        <div className='max-w-6 md:max-w-8 lg:max-w-16 w-full starimg2'>
                                            <img src={star} alt="star" className='h-full w-full' />
                                        </div>
                                    </div>
                                    <div className='h-24 w-8 md:w-[120px] lg:w-[200px] xl:w-[280px] rounded-full flex items-center justify-center line-animation2'>
                                        <div className='w-full border-[#FFB423] border-dashed border-[1px]'></div>
                                    </div>
                                    <div className='h-2 w-2 md:h-4 md:w-4 bg-[#FFB423] rounded-full line-animation2'></div>
                                </div>

                                <div className='max-w-[290px] lg:max-w-[400px] xl:max-w-[500px] w-full wallet-move2 line-animation2 overflow-x-hidden'>
                                    <h4 className='text-sm lg:text-base xl:text-lg font-semibold mb-2.5'>Trustworthy Security and Escrow System</h4>
                                    <p className='text-[#AAA9A9] text-xs lg:text-sm xl:text-base'>Our escrow system holds your payment securely until your
                                        purchase is not just ordered but confirmed shipped. Every
                                        purchase is smooth, secure, and worry-free.</p>
                                </div>
                            </div>
                            {/* three */}
                            <div className='flex items-center gap-3 md:gap-6 relative z-10 overflow-hidden'>
                                <div className='flex items-center hello3'>
                                    <div className='bg-[#FFB423] md:h-16 h-10 w-10 md:w-16 lg:h-24 lg:w-24 rounded-full flex items-center justify-center'>
                                        <div className='max-w-6 md:max-w-8 lg:max-w-16 w-full starimg3'>
                                            <img src={star} alt="star" className='h-full w-full' />
                                        </div>
                                    </div>
                                    <div className='h-24 w-8 md:w-[180px] lg:w-[330px] xl:w-[450px] rounded-full flex items-center justify-center line-animation3'>
                                        <div className='w-full border-[#FFB423] border-dashed border-[1px]'></div>
                                    </div>
                                    <div className='h-2 w-2 md:h-4 md:w-4 bg-[#FFB423] rounded-full line-animation3'></div>
                                </div>

                                <div className='max-w-[290px] lg:max-w-[400px] xl:max-w-[500px] w-full wallet-move3 line-animation3 overflow-hidden'>
                                    <h4 className='text-sm lg:text-base xl:text-lg font-semibold mb-2.5'>Your Loyalty, Rewarded</h4>
                                    <p className='text-[#AAA9A9] text-xs lg:text-sm xl:text-base'>Every time you buy or sell, you're also earning points to unlock
                                        a world of benefits. Accumulate points and win awesome
                                        rewards - from exclusive discounts to early access on</p>
                                </div>
                            </div>
                        </div>
                        <div className='absolute right-0 bottom-0 flex-col gap-11 pb-16 hidden md:flex '>
                            <div className='max-w-[60px] lg:max-w-[100px] xl:max-w-[140px] w-full origin-center rotate-45 crypto_img'>
                                <img src={crypto} alt="img" className='w-full h-full' />
                            </div>
                            <div className='max-w-[90px] lg:max-w-[120px] xl:max-w-[160px] w-full origin-bottom -rotate-12 crypto_img'>
                                <img src={crypto} alt="img" className='w-full h-full' />
                            </div>
                            <div className='max-w-[100px] lg:max-w-[140px] xl:max-w-[180px] w-full rotate-45 crypto_img'>
                                <img src={crypto} alt="img" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose
