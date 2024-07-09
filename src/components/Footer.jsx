import React from "react";

const Footer = () => {
    return (
        <>
            <div className="container px-4 mx-auto font-Poppins">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center justify-between w-full py-4 md:py-6 border-t-[1px] border-[#E3E3E3]">
                        <div>
                            <a href="#" className="flex items-center text-gray-700">
                                <span className="font-bold text-lg md:text-xl">MyLogo</span>
                            </a>
                        </div>
                        <div className="flex items-center text-sm md:text-base space-x-6 md:space-x-14 font-medium">
                            <a href="#" className=" text-black font-medium hover:text-[#FFB423] duration-300 transition-all ">
                                Twitter
                            </a>
                            <a href="#" className=" text-black font-medium hover:text-[#FFB423] duration-300 transition-all">
                                Discord
                            </a>
                            <a href="#" className=" text-black font-medium hover:text-[#FFB423] duration-300 transition-all">
                                Docs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="bg-[#F7F7F7] text-[#7D7D7D] text-center py-4 md:py-5 text-sm  md:text-base font-normal font-Poppins">Copyright © 2024 . All Rights Reserved.</p>
        </>
    );
};

export default Footer;
