'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HotelListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Tất cả địa điểm');
  const [priceRange, setPriceRange] = useState('Tất cả mức giá');
  const [sortOption, setSortOption] = useState('Không sắp xếp');
  const [starFilters, setStarFilters] = useState({
    '3': false,
    '4': false,
    '5': false
  });
  const [amenityFilters, setAmenityFilters] = useState({
    'Bể bơi ngoài trời': false,
    'Nhà hàng': false,
    'Wifi miễn phí': false,
    'Lễ tân 24h': false,
    'Phòng có bồn tắm': false
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  // Hàm xử lý thay đổi filter sao
  const handleStarFilterChange = (star: string) => {
    setStarFilters({
      ...starFilters,
      [star]: !starFilters[star as keyof typeof starFilters]
    });
  };

  // Hàm xử lý thay đổi filter tiện ích
  const handleAmenityFilterChange = (amenity: string) => {
    setAmenityFilters({
      ...amenityFilters,
      [amenity]: !amenityFilters[amenity as keyof typeof amenityFilters]
    });
  };

  // Hàm lọc khách sạn
  useEffect(() => {
    let results = [...hotels];
    
    // Lọc theo tên
    if (searchTerm) {
      results = results.filter(hotel => 
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Lọc theo địa điểm
    if (location !== 'Tất cả địa điểm') {
      results = results.filter(hotel => hotel.location === location);
    }
    
    // Lọc theo giá
    if (priceRange !== 'Tất cả mức giá') {
      results = results.filter(hotel => {
        const price = parseInt(hotel.price.replace(/\D/g, ''));
        
        switch(priceRange) {
          case 'Dưới 1 triệu':
            return price < 1000000;
          case '1 - 2 triệu':
            return price >= 1000000 && price <= 2000000;
          case '2 - 3 triệu':
            return price >= 2000000 && price <= 3000000;
          case 'Trên 3 triệu':
            return price > 3000000;
          default:
            return true;
        }
      });
    }
    
    // Lọc theo sao
    const activeStarFilters = Object.entries(starFilters)
      .filter(([_, isChecked]) => isChecked)
      .map(([star, _]) => parseInt(star));
      
    if (activeStarFilters.length > 0) {
      results = results.filter(hotel => activeStarFilters.includes(hotel.stars));
    }
    
    // Lọc theo tiện ích
    const activeAmenityFilters = Object.entries(amenityFilters)
      .filter(([_, isChecked]) => isChecked)
      .map(([amenity, _]) => amenity);
      
    if (activeAmenityFilters.length > 0) {
      results = results.filter(hotel => 
        activeAmenityFilters.every(amenity => hotel.amenities.includes(amenity))
      );
    }
    
    // Sắp xếp kết quả
    switch(sortOption) {
      case 'Giá thấp đến cao':
        results.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, ''));
          const priceB = parseInt(b.price.replace(/\D/g, ''));
          return priceA - priceB;
        });
        break;
      case 'Giá cao đến thấp':
        results.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, ''));
          const priceB = parseInt(b.price.replace(/\D/g, ''));
          return priceB - priceA;
        });
        break;
      case 'Đánh giá cao nhất':
        results.sort((a, b) => b.stars - a.stars);
        break;
      default:
        // Giữ nguyên thứ tự
        break;
    }

    // Tính tổng số trang
    setTotalPages(Math.ceil(results.length / itemsPerPage));
    
    // Phân trang
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = results.slice(startIndex, endIndex);
    
    setFilteredHotels(paginatedResults);
  }, [searchTerm, location, priceRange, sortOption, starFilters, amenityFilters, page, itemsPerPage]);

  // Thêm hàm xử lý chuyển trang
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bubblegum text-gray-800 mb-2">Bạn lựa chọn khách sạn nào?</h1>
        <p className="text-gray-500 mb-6 font-quicksand">Hơn 100 khách sạn hạng sang giá tốt đang chờ bạn</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Nhập tên khách sạn"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 font-quicksand"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 font-quicksand"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Tất cả địa điểm</option>
              <option>Đà Lạt</option>
              <option>Hạ Long</option>    
              <option>Đà Nẵng</option>
              <option>Phú Quốc</option>
            </select>
          </div>
          
          <div>
            <select 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 font-quicksand"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option>Tất cả mức giá</option>
              <option>Dưới 1 triệu</option>
              <option>1 - 2 triệu</option>
              <option>2 - 3 triệu</option>
              <option>Trên 3 triệu</option>
            </select>
          </div>
          
          <button 
            className="bg-teal-400 text-white px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors font-bubblegum"
            onClick={() => {
              // Reset lại các filter
              setSearchTerm('');
              setLocation('Tất cả địa điểm');
              setPriceRange('Tất cả mức giá');
              setSortOption('Không sắp xếp');
              setStarFilters({
                '3': false,
                '4': false,
                '5': false
              });
              setAmenityFilters({
                'Bể bơi ngoài trời': false,
                'Nhà hàng': false,
                'Wifi miễn phí': false,
                'Lễ tân 24h': false,
                'Phòng có bồn tắm': false
              });
            }}
          >
            Tìm kiếm
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bubblegum">Tìm thấy {filteredHotels.length} kết quả</h2>
        <select 
          className="px-4 py-2 border border-gray-200 rounded-lg font-quicksand"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option>Không sắp xếp</option>
          <option>Giá thấp đến cao</option>
          <option>Giá cao đến thấp</option>
          <option>Đánh giá cao nhất</option>
        </select>
      </div>

      {/* Filters Sidebar + Results */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="bg-white rounded-xl p-6 h-fit">
          <h3 className="font-bubblegum text-lg mb-4">Lọc kết quả</h3>
          
          <div className="mb-6">
            <h4 className="font-bubblegum mb-3">Xếp hạng sao</h4>
            <div className="space-y-2 font-quicksand">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={starFilters['3']}
                  onChange={() => handleStarFilterChange('3')}
                />
                <span className="ml-2">3 sao</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={starFilters['4']}
                  onChange={() => handleStarFilterChange('4')}
                />
                <span className="ml-2">4 sao</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={starFilters['5']}
                  onChange={() => handleStarFilterChange('5')}
                />
                <span className="ml-2">5 sao</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bubblegum mb-3">Tiện ích</h4>
            <div className="space-y-2 font-quicksand">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={amenityFilters['Bể bơi ngoài trời']}
                  onChange={() => handleAmenityFilterChange('Bể bơi ngoài trời')}
                />
                <span className="ml-2">Bể bơi ngoài trời</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={amenityFilters['Nhà hàng']}
                  onChange={() => handleAmenityFilterChange('Nhà hàng')}
                />
                <span className="ml-2">Nhà hàng</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={amenityFilters['Wifi miễn phí']}
                  onChange={() => handleAmenityFilterChange('Wifi miễn phí')}
                />
                <span className="ml-2">Wifi miễn phí</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={amenityFilters['Lễ tân 24h']}
                  onChange={() => handleAmenityFilterChange('Lễ tân 24h')}
                />
                <span className="ml-2">Lễ tân 24h</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="form-checkbox text-teal-400 rounded"
                  checked={amenityFilters['Phòng có bồn tắm']}
                  onChange={() => handleAmenityFilterChange('Phòng có bồn tắm')}
                />
                <span className="ml-2">Phòng có bồn tắm</span>
              </label>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-3 space-y-6">
          {filteredHotels.length > 0 ? (
            <>
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-72 h-48">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-yellow-400 text-white px-2 py-1 rounded text-sm font-bold">
                        {hotel.stars} ⭐
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bubblegum mb-2">{hotel.name}</h3>
                          <p className="text-gray-500 font-quicksand mb-4">{hotel.location}</p>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.map((amenity, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm font-quicksand">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 line-through font-quicksand">{hotel.oldPrice}</p>
                          <p className="text-2xl font-bubblegum text-teal-600">{hotel.price}</p>
                          <p className="text-gray-500 text-sm font-quicksand">/ phòng / đêm</p>
                          <Link href={`/hotels/${hotel.id}`}>
                          <button className="mt-4 bg-teal-400 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition-colors font-bubblegum">
                            Đặt ngay
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-lg ${
                      page === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-teal-50 text-teal-500 hover:bg-teal-100'
                    }`}
                  >
                    ←
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                        page === pageNum
                          ? 'bg-teal-500 text-white'
                          : 'bg-teal-50 text-teal-500 hover:bg-teal-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded-lg ${
                      page === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-teal-50 text-teal-500 hover:bg-teal-100'
                    }`}
                  >
                    →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl font-bubblegum text-gray-500">Không tìm thấy khách sạn phù hợp</p>
              <p className="text-gray-400 font-quicksand mt-2">Vui lòng thử lại với bộ lọc khác</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const hotels = [
  {
    id: 1,
    name: 'DeLaSea Phát Linh Hạ Long',
    location: 'Hạ Long',
    stars: 5,
    price: '1,550,000đ',
    oldPrice: '1,850,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    amenities: ['Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 326    
  },
  {
    id: 2,
    name: 'Citadines Marina Hạ Long',
    location: 'Hạ Long',
    stars: 5,
    price: '1,600,000đ',
    oldPrice: '2,000,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    amenities: ['Wifi miễn phí', 'Lễ tân 24h', 'Bể bơi ngoài trời', 'Nhà hàng'],
    rooms: 580
  },
  {
    id: 3,
    name: 'Sea Stars Hotel Hạ Long',
    location: 'Hạ Long',
    stars: 5,
    price: '1,700,000đ',
    oldPrice: '2,200,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    amenities: ['Bể bơi ngoài trời', 'Wifi miễn phí', 'Lễ tân 24h', 'Nhà hàng'],
    rooms: 354
  },
  {
    id: 4,
    name: 'Sofitel Legend Đà Lạt',
    location: 'Đà Lạt',
    stars: 5,
    price: '1,850,000đ',
    oldPrice: '2,000,000đ',
    image: '/images/Home/Place/DALAT.jpg',
    amenities: ['Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 326
  },
  {
    id: 5,
    name: 'Utopia Resort Đà Lạt',
    location: 'Đà Lạt',
    stars: 5,
    price: '1,550,000đ',
    oldPrice: '1,850,000đ',
    image: '/images/Home/Place/DALAT.jpg',
    amenities: ['Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 326
  },
  {
    id: 6,
    name: 'Banyan Tree Phú Quốc',
    location: 'Phú Quốc',
    stars: 5,
    price: '1,550,000đ',
    oldPrice: '1,850,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
    amenities: ['Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 326
  },
  {
    id: 7,
    name: 'Vinpearl Resort & Spa Hạ Long',
    location: 'Hạ Long',
    stars: 5,
    price: '2,100,000đ',
    oldPrice: '2,500,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    amenities: ['Bể bơi ngoài trời', 'Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 384
  },
  {
    id: 8,
    name: 'Mường Thanh Luxury Đà Lạt',
    location: 'Đà Lạt',
    stars: 5,
    price: '1,450,000đ',
    oldPrice: '1,700,000đ',
    image: '/images/Home/Place/DALAT.jpg',
    amenities: ['Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng', 'Bể bơi ngoài trời'],
    rooms: 290
  },
  {
    id: 9,
    name: 'InterContinental Phú Quốc Long Beach Resort',
    location: 'Phú Quốc',
    stars: 5,
    price: '3,200,000đ',
    oldPrice: '3,800,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
    amenities: ['Bể bơi ngoài trời', 'Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 459
  },
  {
    id: 10,
    name: 'FLC Grand Hotel Hạ Long',
    location: 'Hạ Long',
    stars: 5,
    price: '1,800,000đ',
    oldPrice: '2,100,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    amenities: ['Bể bơi ngoài trời', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 649
  },
  {
    id: 11,
    name: 'Ana Mandara Villas Dalat Resort & Spa',
    location: 'Đà Lạt',
    stars: 5,
    price: '2,300,000đ',
    oldPrice: '2,700,000đ',
    image: '/images/Home/Place/DALAT.jpg',
    amenities: ['Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng', 'Bể bơi ngoài trời'],
    rooms: 70
  },
  {
    id: 12,
    name: 'JW Marriott Phu Quoc Emerald Bay Resort & Spa',
    location: 'Phú Quốc',
    stars: 5,
    price: '4,500,000đ',
    oldPrice: '5,200,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
    amenities: ['Bể bơi ngoài trời', 'Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 244
  },
  {
    id: 13,
    name: 'Royal Lotus Resort & Villas Hạ Long',
    location: 'Hạ Long',
    stars: 4,
    price: '1,200,000đ',
    oldPrice: '1,400,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    amenities: ['Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng', 'Bể bơi ngoài trời'],
    rooms: 180
  },
  {
    id: 14,
    name: 'Terracotta Hotel & Resort Đà Lạt',
    location: 'Đà Lạt',
    stars: 4,
    price: '1,350,000đ',
    oldPrice: '1,600,000đ',
    image: '/images/Home/Place/DALAT.jpg',
    amenities: ['Bể bơi ngoài trời', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 240
  },
  {
    id: 15,
    name: 'Fusion Resort Phú Quốc',
    location: 'Phú Quốc',
    stars: 5,
    price: '3,800,000đ',
    oldPrice: '4,500,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
    amenities: ['Bể bơi ngoài trời', 'Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 97
  },
  {
    id: 16,
    name: 'Novotel Ha Long Bay',
    location: 'Hạ Long',
    stars: 4,
    price: '1,400,000đ',
    oldPrice: '1,650,000đ',
    image: '/images/Home/Place/HALONG.jpg',
    amenities: ['Bể bơi ngoài trời', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 225
  },
  {
    id: 17,
    name: 'Dalat Palace Heritage Hotel',
    location: 'Đà Lạt',
    stars: 5,
    price: '2,000,000đ',
    oldPrice: '2,300,000đ',
    image: '/images/Home/Place/DALAT.jpg',
    amenities: ['Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 43
  },
  {
    id: 18,
    name: 'Salinda Resort Phu Quoc Island',
    location: 'Phú Quốc',
    stars: 5,
    price: '2,700,000đ',
    oldPrice: '3,100,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
    amenities: ['Bể bơi ngoài trời', 'Phòng có bồn tắm', 'Lễ tân 24h', 'Wifi miễn phí', 'Nhà hàng'],
    rooms: 121
  }
]; 
