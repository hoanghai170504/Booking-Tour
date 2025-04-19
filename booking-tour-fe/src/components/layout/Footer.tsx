'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Vivu Xanh</h3>
            <p className="text-gray-700">
              Chúng tôi cung cấp dịch vụ đặt tour du lịch chất lượng cao với giá cả phải chăng.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><Link href="/tours" className="text-gray-700 hover:text-teal-400 transition-colors duration-200">Tours</Link></li>
              <li><Link href="/destinations" className="text-gray-700 hover:text-teal-400 transition-colors duration-200">Điểm đến</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-teal-400 transition-colors duration-200">Giới thiệu</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-teal-400 transition-colors duration-200">Liên hệ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-700 hover:text-teal-400 transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-teal-400 transition-colors duration-200">Điều khoản sử dụng</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-teal-400 transition-colors duration-200">Chính sách bảo mật</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Liên hệ</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Email: contact@bookingtour.com</li>
              <li>Phone: (84) 123-456-789</li>
              <li>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} Booking Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 