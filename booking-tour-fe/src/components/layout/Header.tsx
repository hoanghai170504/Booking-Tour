'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/images/logovivu-removebg.png';
import { useState } from 'react';
import { useAppSelector } from '@/redux/hook';
import { logoutAsync } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hook';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutAsync()).unwrap();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-6 py-1">
        <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="logo" className="w-20 h-20" />
            </Link>
          
          {/* Nút hamburger cho mobile */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
          
          {/* Menu cho desktop */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200 flex items-center">
                Tours
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <Link href="/tours" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-400 hover:bg-teal-50 transition-colors duration-200">Tất cả Tours</Link>
                <Link href="/tours/dalat" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-400 hover:bg-teal-50 transition-colors duration-200">Đà Lạt</Link>
                <Link href="/tours/phuquoc" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-400 hover:bg-teal-50 transition-colors duration-200">Phú Quốc</Link>
                <Link href="/tours/halong" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-400 hover:bg-teal-50 transition-colors duration-200">Hạ Long</Link>
                <Link href="/tours/sapa" className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-400 hover:bg-teal-50 transition-colors duration-200">Sapa</Link>
              </div>
            </div>
            <Link href="/hotels" className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200">Tìm khách sạn</Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200">Giới thiệu</Link>
            <Link href="/blogs" className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200">Blogs</Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200">Liên hệ</Link>
          </div>

          <div className="hidden md:flex space-x-4">  
            {isAuthenticated ? (
              <button onClick={handleLogout} className="px-5 py-2.5 text-teal-400 border border-teal-400 font-medium rounded-md hover:bg-teal-50 transition-colors duration-200">
                Đăng xuất
              </button>
            ) : (
              <>
                <Link href="/login" className="px-5 py-2.5 text-teal-400 border border-teal-400 font-medium rounded-md hover:bg-teal-50 transition-colors duration-200">
                  Đăng nhập
                </Link>
                <Link href="/register" className="px-5 py-2.5 bg-teal-400 text-white font-medium rounded-md hover:bg-teal-500 transition-colors duration-200 shadow-sm">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4 transition-all duration-300`}>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <button 
                className="w-full text-left font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200 flex items-center justify-between py-2"
                onClick={() => {
                  const submenu = document.getElementById('mobile-tours-submenu');
                  if (submenu) {
                    submenu.classList.toggle('hidden');
                  }
                }}
              >
                Tours
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="mobile-tours-submenu" className="hidden pl-4 mt-2 border-l-2 border-teal-100">
                <Link href="/tours" className="block py-2 text-sm text-gray-700 hover:text-teal-400 transition-colors duration-200">Tất cả Tours</Link>
                <Link href="/tours/dalat" className="block py-2 text-sm text-gray-700 hover:text-teal-400 transition-colors duration-200">Đà Lạt</Link>
                <Link href="/tours/phuquoc" className="block py-2 text-sm text-gray-700 hover:text-teal-400 transition-colors duration-200">Phú Quốc</Link>
                <Link href="/tours/halong" className="block py-2 text-sm text-gray-700 hover:text-teal-400 transition-colors duration-200">Hạ Long</Link>
                <Link href="/tours/sapa" className="block py-2 text-sm text-gray-700 hover:text-teal-400 transition-colors duration-200">Sapa</Link>
              </div>
            </div>
            <Link href="/hotels" className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200 py-2">Tìm khách sạn</Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200 py-2">Giới thiệu</Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-teal-400 transition-colors duration-200 py-2">Liên hệ</Link>
            
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Link href="/login" className="px-5 py-2.5 text-teal-400 border border-teal-400 font-medium rounded-md hover:bg-teal-50 transition-colors duration-200 text-center">
                Đăng nhập
              </Link>
              <Link href="/register" className="px-5 py-2.5 bg-teal-400 text-white font-medium rounded-md hover:bg-teal-500 transition-colors duration-200 shadow-sm text-center">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 