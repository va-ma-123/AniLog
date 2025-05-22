'use client';

import { useAuth } from '@/lib/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className='bg-gray-900 text-white py-3 shadow-md'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4'>
            
            <Link href="/" className='text-xl font-bold'>AniLog</Link>
            <div className='flex items-center gap-6'>
                <Link href="\anime" className='hover:text-gray-300'>Anime</Link>
                <Link href="\manga" className='hover:text-gray-300'>Manga</Link>
            

                {isAuthenticated ? (
                    <div className='relative'>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className='flex items-center gap-2 focus:outline-none'
                        >
                            <Image 
                                src={user?.avatar || "/default-avatar.png"}
                                alt="Profile"
                                width={32}
                                height={32}
                                className='rounded-full border'
                            />
                        </button>

                        {dropdownOpen && (
                            <div className='absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-10'>
                                <Link
                                    href="/profile"
                                    className='block px-4 py-2 hover:bg-gray-100'
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    View Profile
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setDropdownOpen(false);
                                    }}
                                    className='block w-full text-left px-4 py-2 hover:bg-gray-100'
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                    
                ) : (
                    <>
                    <Link href="/login" className="hover:text-gray-300">Login</Link>
                    <Link href="/register" className="hover:text-gray-300">Sign Up</Link>
                </>
                )}
            </div>
        </div>
    </nav>
  )
}

export default NavBar