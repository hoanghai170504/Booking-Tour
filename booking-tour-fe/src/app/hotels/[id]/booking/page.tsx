"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface BookingFormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  specialRequests: string;
  name: string;
  email: string;
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1,
    specialRequests: '',
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Xử lý đặt phòng ở đây
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-teal-500">Trang chủ</Link>
            <span className="text-gray-500">/</span>
            <Link href="/hotels/list" className="text-gray-500 hover:text-teal-500">Khách sạn</Link>
            <span className="text-gray-500">/</span>
            <Link href={`/hotels/${params.id}`} className="text-gray-500 hover:text-teal-500">Chi tiết</Link>
            <span className="text-gray-500">/</span>
            <span className="text-teal-500">Đặt phòng</span>
          </div>
        </div>  
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form đặt phòng */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Thông tin đặt phòng</h1>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ngày nhận phòng
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ngày trả phòng
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tên khách hàng
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    />
                  </div>
                </div>  

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Người lớn
                    </label>
                    <select
                      value={formData.adults}
                      onChange={(e) => setFormData({...formData, adults: Number(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num} người</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Trẻ em
                    </label>
                    <select
                      value={formData.children}
                      onChange={(e) => setFormData({...formData, children: Number(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    >
                      {[0,1,2,3,4].map(num => (
                        <option key={num} value={num}>{num} người</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Số phòng
                    </label>
                    <select
                      value={formData.rooms}
                      onChange={(e) => setFormData({...formData, rooms: Number(e.target.value)})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num} phòng</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Yêu cầu đặc biệt
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    placeholder="Ví dụ: Phòng tầng cao, phòng không hút thuốc..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
                >
                  Xác nhận đặt phòng
                </button>
              </form>
            </div>
          </div>

          {/* Thông tin đặt phòng */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Chi tiết đặt phòng</h2>
              
              <div className="space-y-4 flex-col">
                <div className="flex-row items-center gap-3 p-3">
                  <div className="relative w-100 h-50 rounded-md overflow-hidden">
                    <Image
                      src="/images/Home/Place/HALONG.jpg"
                      alt="Room preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phòng Deluxe</h3>
                    <p className="text-sm text-gray-600">2 giường đơn</p>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Giá phòng/đêm</span>
                    <span className="font-semibold">1,200,000₫</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Số đêm</span>
                    <span className="font-semibold">
                      {formData.checkIn && formData.checkOut
                        ? Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 3600 * 24))
                        : 0} đêm
                    </span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Tên khách hàng</span>
                    <span className="font-semibold">{formData.name || 'Chưa nhập'}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Email</span>
                    <span className="font-semibold">{formData.email || 'Chưa nhập'}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Thuế và phí</span>
                    <span className="font-semibold">240,000₫</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-bold">Tổng cộng</span>
                      <span className="font-bold text-teal-600">
                        {formData.checkIn && formData.checkOut
                          ? (1200000 * Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 3600 * 24)) + 240000).toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})
                          : '0₫'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-semibold text-gray-800 mb-1">Chính sách hủy phòng</h4>
                  <p className="text-sm text-gray-600">
                    Miễn phí hủy phòng trước 3 ngày check-in. Sau thời gian này, 
                    khách sạn sẽ thu phí một đêm đầu tiên.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 