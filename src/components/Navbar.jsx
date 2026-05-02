/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { User, ShoppingBag, Home, LogOut } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

export default function Navbar() {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (pathname === '/signin') {
      setActiveTab('signin');
    } else if (pathname === '/register') {
      setActiveTab('register');
    } else {
      setActiveTab('');
    }
    
  }, [pathname]);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.refresh(); // Refresh to update the session state
  };

  return (
    <nav className="bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm transition-transform group-hover:rotate-12">
                A
              </div>
              <span className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white uppercase">
                aurelia<span className="text-amber-500 font-light">-summer</span>
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors">
              <Home size={16} /> Home
            </Link>
            <Link href="/products" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors">
              <ShoppingBag size={16} /> Products
            </Link>
            <Link href="/profile" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors">
              <User size={16} /> My Profile
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center">
            {!user ? (
              <div className="relative flex items-center h-11 w-44 sm:w-52 rounded-full p-1 overflow-hidden bg-gray-50 dark:bg-zinc-900/50">
                {activeTab && (
                  <div 
                    className={`absolute h-[82%] rounded-full bg-amber-500 shadow-md shadow-amber-500/30 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${activeTab === 'signin' ? 'left-1 w-[46%]' : 'left-[52%] w-[46%]'}`}
                  />
                )}
                <Link href="/signin" className={`relative z-10 flex-1 text-center text-sm font-bold transition-all duration-300 ${activeTab === 'signin' ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  Sign In
                </Link>
                <Link href="/register" className={`relative z-10 flex-1 text-center text-sm font-bold transition-all duration-300 ${activeTab === 'register' ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  Register
                </Link>
              </div>
            ) : (
              /* User Profile / Logout View */
              <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                  
       
                </div>
          <Avatar><Avatar.Image src={user.image} alt={user.name} />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback></Avatar>
                <button 
                  onClick={handleSignOut}
                  className="p-2 rounded-full bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
                  title="Sign Out"
                >
                  <LogOut size={20} />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}