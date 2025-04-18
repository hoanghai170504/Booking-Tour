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
    
    setFilteredHotels(results);
  }, [searchTerm, location, priceRange, sortOption, starFilters, amenityFilters]);

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
            filteredHotels.map((hotel) => (
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
            ))
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
    image: '/images/hotels/halong-1.jpg',
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
    image: '/images/hotels/halong-2.jpg',
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
    image: '/images/hotels/halong-3.jpg',
    amenities: ['Bể bơi ngoài trời', 'Wifi miễn phí', 'Lễ tân 24h', 'Nhà hàng'],
    rooms: 354
  }
]; 