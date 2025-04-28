'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

// Giả sử bạn có thể import dữ liệu tour từ file gốc
// Hoặc copy lại mảng tours như ở trang chi tiết
const tours = [
  {
    id: 1,
    name: 'Tour Đà Lạt 3N2Đ',
    duration: '3 ngày 2 đêm',
    location: 'Đà Lạt',
    price: '2,990,000đ',
    image: '/images/Home/Place/DALAT.jpg',
  },
  // ... các tour khác
];

export default function TourBookingPage() {
  const params = useParams();
  const router = useRouter();
  const tourId = Number(params.id);
  const tour = tours.find(t => t.id === tourId);

  // State lưu thông tin khách hàng (có thể lấy từ form trước đó hoặc để nhập lại)
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    people: 1,
    paymentMethod: 'credit',
  });

  // State cho loading khi submit
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hàm xử lý xác nhận thanh toán
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Giả lập thời gian xử lý thanh toán
    setTimeout(() => {
      // Ở đây bạn có thể gọi API thanh toán hoặc chuyển sang trang cảm ơn
      alert('Thanh toán thành công!');
      router.push('/tours');
      setIsSubmitting(false);
    }, 1500);
  };

  // Tính tổng tiền dựa trên số người
  const calculateTotal = () => {
    if (!tour) return '0đ';
    const priceValue = parseInt(tour.price.replace(/\D/g, ''));
    const total = priceValue * customer.people;
    return total.toLocaleString('vi-VN') + 'đ';
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy tour</h1>
          <p className="text-gray-600 mb-6">Tour bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link href="/tours">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              Quay lại danh sách
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-teal-600 transition-colors">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/tours" className="hover:text-teal-600 transition-colors">Tours</Link>
          <span className="mx-2">/</span>
          <Link href={`/tours/${tour.id}`} className="hover:text-teal-600 transition-colors">{tour.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-teal-600">Đặt tour</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Form thanh toán */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex-1 order-2 lg:order-1">
          <h1 className="text-2xl font-bold mb-6 text-teal-600 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Thông tin đặt tour
          </h1>
          
          <form onSubmit={handleConfirm} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Họ và tên</label>
                <input
                  type="text"
                  required
                  placeholder="Nhập họ và tên"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  value={customer.name}
                  onChange={e => setCustomer({ ...customer, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  value={customer.email}
                  onChange={e => setCustomer({ ...customer, email: e.target.value })}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Số điện thoại</label>
                <input
                  type="tel"
                  required
                  placeholder="0xxxxxxxxx"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  value={customer.phone}
                  onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Ngày khởi hành</label>
                <input
                  type="date"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  value={customer.date}
                  onChange={e => setCustomer({ ...customer, date: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Số lượng người</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                value={customer.people}
                onChange={e => setCustomer({ ...customer, people: Number(e.target.value) })}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} người</option>
                ))}
              </select>
            </div>
            
            <div className="border-t border-b py-5 my-5">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Phương thức thanh toán
              </h2>
              
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={customer.paymentMethod === 'credit'}
                    onChange={() => setCustomer({ ...customer, paymentMethod: 'credit' })}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                  />
                  <div className="ml-3">
                    <span className="block font-medium text-gray-700">Thẻ tín dụng/ghi nợ</span>
                    <span className="text-sm text-gray-500">Visa, Mastercard, JCB</span>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <div className="w-8 h-5 bg-blue-600 rounded"></div>
                    <div className="w-8 h-5 bg-red-500 rounded"></div>
                    <div className="w-8 h-5 bg-green-500 rounded"></div>
                  </div>
                </label>
                
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="banking"
                    checked={customer.paymentMethod === 'banking'}
                    onChange={() => setCustomer({ ...customer, paymentMethod: 'banking' })}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                  />
                  <div className="ml-3">
                    <span className="block font-medium text-gray-700">Chuyển khoản ngân hàng</span>
                    <span className="text-sm text-gray-500">Thanh toán qua Internet Banking</span>
                  </div>
                </label>
                
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="momo"
                    checked={customer.paymentMethod === 'momo'}
                    onChange={() => setCustomer({ ...customer, paymentMethod: 'momo' })}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                  />
                  <div className="ml-3">
                    <span className="block font-medium text-gray-700">Ví điện tử</span>
                    <span className="text-sm text-gray-500">MoMo, ZaloPay, VNPay</span>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Giá tour</span>
                <span>{tour.price}/người</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Số lượng</span>
                <span>{customer.people} người</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-3 pt-3 border-t">
                <span>Tổng cộng</span>
                <span className="text-teal-600">{calculateTotal()}</span>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-medium mt-4 flex items-center justify-center ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-teal-500 hover:bg-teal-600 text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang xử lý...
                </>
              ) : (
                <>
                  Xác nhận & Thanh toán
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
          
          <Link href={`/tours/${tour.id}`}>
            <button className="w-full mt-4 text-teal-500 hover:underline flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Quay lại thông tin tour
            </button>
          </Link>
        </div>
        
        {/* Thông tin tour */}
        <div className="lg:w-1/3 order-1 lg:order-2">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Thông tin tour</h2>
            <div className="mb-4">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">{tour.name}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <svg className="w-4 h-4 mr-1 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{tour.duration}</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{tour.location}</span>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Ngày khởi hành: <span className="font-medium">{customer.date || 'Chưa chọn'}</span></span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Số người: <span className="font-medium">{customer.people} người</span></span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Giá: <span className="font-medium">{tour.price}/người</span></span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between font-bold text-lg">
                <span>Tổng cộng</span>
                <span className="text-teal-600">{calculateTotal()}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                * Giá đã bao gồm thuế và phí dịch vụ
              </p>
            </div>
            
            <div className="mt-6 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <div className="flex">
                <svg className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-700">
                  Vui lòng kiểm tra kỹ thông tin trước khi thanh toán. Mọi thắc mắc xin liên hệ hotline: <span className="font-medium">1900 1234</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}