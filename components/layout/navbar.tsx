"use client";

import { Bell, Search, Moon } from 'lucide-react';
import { GlassButton } from '../ui/glass-button';


export function Navbar() {
    return (<header className='fixed left-80 right-6 top-6 z-50'>
        <div className='glass flex h-16 items-center justify-between rounded-3xl px-6'>
            <div className='flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-2 w-80'>
                <Search size={18} className='text-slate-400' />
                <input placeholder='Search... ' className='w-full bg-transparent outline-none placeholder:text-slate-500' />

            </div>
            <div className='flex items-center gap-3'>
                <GlassButton variant={"ghost"} size={"sm"}>
                    <Moon size={18} />
                </GlassButton>
                <img src="https://ui-avatars.com/api/?name=Selva+Ganesh"
                    alt='Profile'
                    className='h-10 w-10 rounded-full' />
            </div>
        </div>
    </header>)
}