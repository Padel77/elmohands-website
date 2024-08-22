"use client";
import UseSearchParamsHook from '@/hooks/UseSearchParamsHook';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

const CustomerService = () => {
    const { pathname } = UseSearchParamsHook();
    const [showIcons, setShowIcons] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(false);

    const handleClick = () => {
        setShowIcons(!showIcons);
    };

    const handleWhatsappClick = () => {
        console.log('WhatsApp clicked');
        if (navigator.userAgent.includes('WhatsApp')) {
            window.open(`whatsapp://send?phone=+9660575645308`);
        } else {
            window.open('https://web.whatsapp.com/send?phone=+9660575645308', '_blank');
        }
    };

    const handleCallClick = () => {
        console.log('Call clicked');
        window.open('tel:+9660575645308');
    };

    const handleScrollUpClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollUp(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`bg-red-400 hover:bg-red-500 w-min p-2 rounded-full fixed 
          bottom-10 ${pathname === '/ar' ? 'right-4' : 'left-4'} cursor-pointer md:right-8 transition  ease-in-out  focus:shadow-lg ${showIcons ? 'rotate-45' : 'rotate-0'} z-50`} onClick={handleClick}>
                <RiCustomerService2Fill color='white' className=' w-7 h-7 md:w-10 md:h-10' />
            </div>
            {showIcons && (
                <div className={`fixed bottom-20 ${pathname === '/ar' ? 'right-4' : 'left-4'} flex flex-col space-y-2 transition-opacity duration-500 ease-in-out opacity-100 z-50`}>
                    <div className="bg-green-600 p-2 rounded-full cursor-pointer" onClick={handleWhatsappClick}>
                        <FaWhatsapp color='white' className='w-4 h-4 md:w-5 md:h-5' />
                    </div>
                    <div className="bg-blue-600 p-2 rounded-full cursor-pointer" onClick={handleCallClick}>
                        <FaPhone color='white' className='w-4 h-4 md:w-5 md:h-5' />
                    </div>
                </div>
            )}
            {showScrollUp && (
                <div className={`${pathname === '/ar' ? 'left-4 ' : 'right-4'} bg-black w-min p-2 rounded-full fixed bottom-10  cursor-pointer z-50`} onClick={handleScrollUpClick}>
                    <IoIosArrowUp color='white' className='w-5 h-5 md:w-8 md:h-10' />
                </div>
            )}
        </>
    );
};

export default CustomerService;