'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Định nghĩa interface
interface Tour {
  id: number;
  name: string;
  duration: string;
  location: string;
  price: string;
  description: string;
  image: string;
  gallery: string[];
  itinerary: string[];
  included: string[];
  notIncluded: string[];
  rating: number;
  reviews: number;
  highlights: string[];
}

// Dữ liệu mẫu
const tours: Tour[] = [
  {
    id: 1,
    name: 'Tour Đà Lạt 3N2Đ',
    duration: '3 ngày 2 đêm',
    location: 'Đà Lạt',
    price: '2,990,000đ',
    rating: 4.8,
    reviews: 156,
    description: 'Khám phá thành phố ngàn hoa với những điểm đến nổi tiếng. Tour bao gồm tham quan các địa điểm nổi tiếng như Hồ Xuân Hương, Nhà thờ Con Gà, Chợ Đà Lạt, và nhiều điểm đến hấp dẫn khác.\n\nĐà Lạt - thành phố của những câu chuyện cổ tích, nơi bạn có thể tận hưởng không khí trong lành, ngắm nhìn những vườn hoa rực rỡ và khám phá những địa điểm du lịch nổi tiếng. Tour 3 ngày 2 đêm sẽ mang đến cho bạn trải nghiệm trọn vẹn về vẻ đẹp và văn hóa của thành phố ngàn hoa.',
    image: '/images/tour-dalat.jpg',
    gallery: [
      '/images/dalat-1.jpg',
      '/images/dalat-2.jpg',
      '/images/dalat-3.jpg',
      '/images/dalat-4.jpg',
    ],
    highlights: [
      'Tham quan Hồ Xuân Hương - trái tim của Đà Lạt',
      'Khám phá Nhà thờ Con Gà - kiến trúc độc đáo',
      'Thưởng thức ẩm thực địa phương tại Chợ Đà Lạt',
      'Ngắm hoa tại Vườn hoa Đà Lạt',
      'Tham quan Dinh Bảo Đại - di tích lịch sử'
    ],
    itinerary: [
      'Ngày 1: Khởi hành từ TP.HCM - Đà Lạt - Tham quan Hồ Xuân Hương - Nhà thờ Con Gà',
      'Ngày 2: Tham quan Chợ Đà Lạt - Vườn hoa Đà Lạt - Hồ Tuyền Lâm',
      'Ngày 3: Tham quan Dinh Bảo Đại - Vườn Atiso - Khởi hành về TP.HCM',
    ],
    included: [
      'Xe ô tô đời mới',
      'Khách sạn 3 sao',
      'Ăn uống theo chương trình',
      'Hướng dẫn viên',
      'Bảo hiểm du lịch',
      'Vé tham quan',
    ],
    notIncluded: [
      'Ăn uống ngoài chương trình',
      'Chi phí cá nhân',
      'Tip cho hướng dẫn viên',
      'Vé máy bay',
    ],
  },
  // Thêm các tour khác tương tự
];

export default function TourDetailPage() {
  const params = useParams();
  const tourId = Number(params.id);
  const tour = tours.find(t => t.id === tourId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-md max-w-md">
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
    <div className="flex flex-col">
      {/* Hero Section with Image Gallery */}
      <div className="relative h-[500px] w-full">
        <Image
          src={tour.gallery[activeImageIndex]}
          alt={`${tour.name} - Ảnh ${activeImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.name}</h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {tour.rating} ({tour.reviews} đánh giá)
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {tour.location}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {tour.duration}
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-300">Giá từ</p>
                <p className="text-2xl font-bold">{tour.price}</p>
                <p className="text-sm text-gray-300">/người</p>
              </div>
              <Link href={`/tours/${tour.id}/booking`}>
                <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors flex items-center">
                  <span>Đặt ngay</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Image Thumbnails */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
          {tour.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                activeImageIndex === index ? 'border-teal-500 scale-110' : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white py-3 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-teal-500">Trang chủ</Link>
            <span className="text-gray-400">/</span>
            <Link href="/tours" className="text-gray-500 hover:text-teal-500">Tìm tour</Link>
            <span className="text-gray-400">/</span>
            <span className="text-teal-500">{tour.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Tổng quan
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'itinerary'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Lịch trình
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'services'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Dịch vụ
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Giới thiệu</h2>
                  <div className="prose max-w-none">
                    {tour.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-600">{paragraph}</p>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Điểm nổi bật</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Lịch trình chi tiết</h2>
                  <div className="space-y-4">
                    {tour.itinerary.map((day, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-500 flex-shrink-0">
                            <span className="font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Ngày {index + 1}</h3>
                            <p className="text-gray-600">{day}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Dịch vụ bao gồm</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {tour.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Dịch vụ không bao gồm</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Đặt tour</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày khởi hành
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số lượng người
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} người
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Giá tour</span>
                    <span className="font-medium">{tour.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Phí dịch vụ</span>
                    <span className="font-medium">0đ</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Tổng cộng</span>
                    <span className="text-teal-600">{tour.price}</span>
                  </div>
                </div>
                <Link href={`/tours/${tour.id}/booking`}>
                  <button className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium">
                    Đặt tour ngay
                  </button>
                </Link>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Giá đã bao gồm thuế và phí dịch vụ
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 