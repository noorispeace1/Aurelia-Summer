/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { User, ShoppingBag, Home, LogOut, Menu, X } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

export default function Navbar() {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    if (pathname === '/signin') {
      setActiveTab('signin');
    } else if (pathname === '/register') {
      setActiveTab('register');
    } else {
      setActiveTab('');
    }
    // Mobile menu bondho hobe jokhon route change hobe
    setIsMenuOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.refresh();
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

          {/* Desktop Navigation Links */}
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

          {/* Auth Section (Desktop) */}
          <div className="hidden md:flex items-center">
            {!user ? (
              <div className="relative flex items-center h-11 w-52 rounded-full p-1 bg-gray-50 dark:bg-zinc-900/50">
                {activeTab && (
                  <div 
                    className={`absolute h-[82%] rounded-full bg-amber-500 shadow-md transition-all duration-300
                    ${activeTab === 'signin' ? 'left-1 w-[46%]' : 'left-[52%] w-[46%]'}`}
                  />
                )}
                <Link href="/signin" className={`relative z-10 flex-1 text-center text-sm font-bold transition-all ${activeTab === 'signin' ? 'text-white' : 'text-gray-500'}`}>
                  Sign In
                </Link>
                <Link href="/register" className={`relative z-10 flex-1 text-center text-sm font-bold transition-all ${activeTab === 'register' ? 'text-white' : 'text-gray-500'}`}>
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                </div>
                <Avatar src={user.image} name={user.name?.charAt(0)} />
                <button onClick={handleSignOut} className="p-2 rounded-full hover:text-red-500 transition-colors">
                  <LogOut size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {user && <Avatar size="sm" src={user.image} name={user.name?.charAt(0)} />}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? "visible" : "invisible"}`}>
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMenuOpen(false)} />
        
        {/* Side Panel */}
        <div className={`absolute right-0 top-0 h-full w-64 bg-white dark:bg-zinc-950 shadow-xl transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
               <span className="font-bold text-amber-500">Menu</span>
               <button onClick={() => setIsMenuOpen(false)}><X size={20}/></button>
            </div>

            <div className="flex flex-col space-y-6">
              <Link href="/" className="flex items-center gap-3 text-lg font-medium"><Home size={20} /> Home</Link>
              <Link href="/products" className="flex items-center gap-3 text-lg font-medium"><ShoppingBag size={20} /> Products</Link>
              <Link href="/profile" className="flex items-center gap-3 text-lg font-medium"><User size={20} /> Profile</Link>
              
              <hr className="border-gray-100 dark:border-zinc-800" />
              
              {!user ? (
                <div className="flex flex-col gap-4">
                  <Link href="/signin" className="w-full py-3 text-center rounded-xl bg-gray-100 dark:bg-zinc-900 font-bold">Sign In</Link>
                  <Link href="/register" className="w-full py-3 text-center rounded-xl bg-amber-500 text-white font-bold">Register</Link>
                </div>
              ) : (
                <button 
                  onClick={handleSignOut}
                  className="flex items-center gap-3 text-red-500 font-medium pt-4"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}