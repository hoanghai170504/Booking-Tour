'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Định nghĩa các interface
interface Hotel {
  id: number;
  name: string;
  location: string;
  oldPrice: string;
  price: string;
  image: string;
  amenities: string[];
  description: string;
  address: string;
  rooms: Room[];
  rating: number;
  reviews: number;
  images: string[];
}

interface Room {
  id: string;
  name: string;
  size: string;
  capacity: string;
  view: string;
  price: string;
  image: string;
  features: string[];
}

// Dữ liệu mẫu
const sampleHotels: Hotel[] = [
  {
    id: 1,
    name: 'DeLaSea Phát Linh Hạ Long',
    location: 'Hạ Long',
    oldPrice: '1,850,000đ',
    price: '1,550,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    images: [
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg'
    ],
    amenities: ['Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng', 'Bể bơi ngoài trời', 'Spa', 'Phòng gym', 'Dịch vụ giặt ủi'],
    description: 'DeLaSea Phát Linh Hạ Long là một khách sạn 5 sao sang trọng nằm bên bờ vịnh Hạ Long, mang đến tầm nhìn tuyệt đẹp ra vịnh và trải nghiệm nghỉ dưỡng đẳng cấp quốc tế. Khách sạn có thiết kế hiện đại kết hợp với kiến trúc địa phương, tạo nên không gian nghỉ dưỡng độc đáo và ấn tượng.\n\nVới vị trí đắc địa, DeLaSea Phát Linh Hạ Long là điểm đến lý tưởng cho những du khách muốn khám phá vẻ đẹp của vịnh Hạ Long - di sản thiên nhiên thế giới. Khách sạn cung cấp đầy đủ tiện nghi hiện đại, dịch vụ chất lượng cao và không gian nghỉ dưỡng thoải mái, mang đến trải nghiệm hoàn hảo cho mọi du khách.',
    address: 'Đường Hạ Long, Phường Hồng Gai, Thành phố Hạ Long, Tỉnh Quảng Ninh',
    rating: 4.8,
    reviews: 124,
    rooms: [
      {
        id: '1',
        name: 'Phòng Deluxe Ocean View',
        size: '35m²',
        capacity: '2 người',
        view: 'Hướng biển',
        price: '1,550,000đ',
        image: '/images/Home/Place/HALONG.jpg',
        features: ['Ban công riêng', 'Tivi màn hình phẳng', 'Minibar', 'Điều hòa', 'Bồn tắm']
      },
      {
        id: '2',
        name: 'Phòng Suite Premium',
        size: '50m²',
        capacity: '3 người',
        view: 'Hướng vịnh',
        price: '2,200,000đ',
        image: '/images/Home/Place/HALONG.jpg',
        features: ['Phòng khách riêng', 'Ban công lớn', 'Tivi màn hình phẳng', 'Minibar', 'Điều hòa', 'Bồn tắm', 'Bồn tắm sục']
      }
    ]
  },
  {
    id: 2,
    name: 'Citadines Marina Hạ Long',
    location: 'Hạ Long',
    oldPrice: '2,000,000đ',
    price: '1,600,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    images: [
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg',
      '/images/Home/Place/HALONG.jpg'
    ],
    amenities: ['Wifi miễn phí', 'Lễ tân 24h', 'Bể bơi ngoài trời', 'Nhà hàng', 'Phòng gym', 'Dịch vụ giặt ủi', 'Bãi đỗ xe', 'Thang máy'],
    description: 'Citadines Marina Hạ Long là một căn hộ khách sạn cao cấp nằm tại trung tâm thành phố Hạ Long, mang đến không gian sống tiện nghi và hiện đại cho du khách. Với vị trí đắc địa gần bến cảng và các điểm tham quan nổi tiếng, đây là lựa chọn lý tưởng cho những chuyến du lịch dài ngày.\n\nKhách sạn được thiết kế theo phong cách hiện đại, với các căn hộ rộng rãi, đầy đủ tiện nghi. Mỗi căn hộ đều có phòng bếp riêng, phòng khách và phòng ngủ, tạo cảm giác như đang ở nhà riêng. Citadines Marina Hạ Long còn cung cấp nhiều dịch vụ tiện ích như bể bơi, phòng gym, nhà hàng và dịch vụ giặt ủi, đáp ứng mọi nhu cầu của du khách.',
    address: 'Đường Hạ Long, Phường Hồng Gai, Thành phố Hạ Long, Tỉnh Quảng Ninh',
    rating: 4.5,
    reviews: 98,
    rooms: [
      {
        id: '1',
        name: 'Studio Deluxe',
        size: '32m²',
        capacity: '2 người',
        view: 'Hướng thành phố',
        price: '1,600,000đ',
        image: '/images/Home/Place/HALONG.jpg',
        features: ['Phòng bếp mini', 'Tivi màn hình phẳng', 'Minibar', 'Điều hòa', 'Bồn tắm']
      },
      {
        id: '2',
        name: 'One Bedroom Suite',
        size: '45m²',
        capacity: '3 người',
        view: 'Hướng vịnh',
        price: '2,100,000đ',
        image: '/images/Home/Place/HALONG.jpg',
        features: ['Phòng bếp đầy đủ', 'Phòng khách riêng', 'Tivi màn hình phẳng', 'Minibar', 'Điều hòa', 'Bồn tắm', 'Ban công']
      }
    ]
  }
];

export default function HotelDetailPage() {
  const params = useParams();
  const hotelId = Number(params.id);
  const hotel = sampleHotels.find(h => h.id === hotelId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-md max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy khách sạn</h1>
          <p className="text-gray-600 mb-6">Khách sạn bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link href="/hotels/list">
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
          src={hotel.images[activeImageIndex]}
          alt={`${hotel.name} - Ảnh ${activeImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{hotel.name}</h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {hotel.rating} ({hotel.reviews} đánh giá)
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {hotel.location}
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-300">Giá từ</p>
                <p className="text-2xl font-bold">{hotel.price}</p>
                <p className="text-sm text-gray-300 line-through">{hotel.oldPrice}</p>
              </div>
              <Link href={`/hotels/${hotel.id}/booking`}>
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
          {hotel.images.map((image, index) => (
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
            <Link href="/hotels/list" className="text-gray-500 hover:text-teal-500">Tìm khách sạn</Link>
            <span className="text-gray-400">/</span>
            <span className="text-teal-500">{hotel.name}</span>
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
                  onClick={() => setActiveTab('rooms')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'rooms'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Phòng & Giá
                </button>
                <button
                  onClick={() => setActiveTab('amenities')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'amenities'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Tiện ích
                </button>
                <button
                  onClick={() => setActiveTab('location')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'location'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Vị trí
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Giới thiệu</h2>
                  <div className="prose max-w-none">
                    {hotel.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-600">{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'rooms' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Các loại phòng & giá</h2>
                  <div className="space-y-6">
                    {hotel.rooms.map((room) => (
                      <div key={room.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative w-full md:w-64 h-48">
                            <Image
                              src={room.image}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-bold text-xl mb-2">{room.name}</h3>
                                <div className="flex flex-wrap gap-3 mb-4">
                                  <span className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    {room.size}
                                  </span>
                                  <span className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    {room.capacity}
                                  </span>
                                  <span className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    {room.view}
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {room.features.map((feature, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right mt-4 md:mt-0">
                                <p className="text-2xl font-bold text-teal-600">{room.price}</p>
                                <p className="text-sm text-gray-500">/đêm</p>
                                <Link href={`/hotels/${hotel.id}/booking?room=${room.id}`}>
                                  <button className="mt-2 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                                    Đặt ngay
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'amenities' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tiện ích</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'location' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Vị trí</h2>
                  <div className="bg-gray-100 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-500 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Địa chỉ</h3>
                        <p className="text-gray-600">{hotel.address}</p>
                      </div>
                    </div>
                    <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
                      {/* Add your map component here */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Bản đồ sẽ được hiển thị ở đây
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Đặt phòng</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày nhận phòng
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày trả phòng
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
                    <option>1 người</option>
                    <option>2 người</option>
                    <option>3 người</option>
                    <option>4 người</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số lượng phòng
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>1 phòng</option>
                    <option>2 phòng</option>
                    <option>3 phòng</option>
                  </select>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Giá phòng</span>
                    <span className="font-medium">{hotel.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Phí dịch vụ</span>
                    <span className="font-medium">0đ</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Tổng cộng</span>
                    <span className="text-teal-600">{hotel.price}</span>
                  </div>
                </div>
                <Link href={`/hotels/${hotel.id}/booking`}>
                  <button className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium">
                    Đặt ngay
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