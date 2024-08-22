"use client";
import UseSearchParamsHook from '@/hooks/UseSearchParamsHook';
import { Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
const GlobalLanguage: React.FC = () => {
    const { pathname, router } = UseSearchParamsHook();


    const changeLanguage = () => {
        {/* Change this to the desired path */ }
        router.push(pathname === '/ar' ? '/en' : '/ar');
    };

    return (
        <div>
            <button onClick={changeLanguage} className='flex'><Globe size={20} strokeWidth={1} />
                <span>{pathname === '/ar' ? "En" : "Ar"}</span></button>
        </div>
    );
};

export default GlobalLanguage;