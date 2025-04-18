import Image from 'next/image';
import Link from 'next/link';

export default function HotelsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="bg-teal-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bubblegum mb-4 text-teal-600 text-center">Tìm Khách Sạn</h1>
          <p className="text-xl font-quicksand text-teal-500 text-center mb-8">Đặt phòng khách sạn với giá tốt nhất cho chuyến đi của bạn</p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="container mx-auto px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-teal-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-teal-600 font-bubblegum flex items-center">
                Địa điểm
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600 font-quicksand">
                <option>Tất cả</option>
                <option>Đà Lạt</option>
                <option>Phú Quốc</option>
                <option>Hạ Long</option>
                <option>Sapa</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-teal-600 font-bubblegum flex items-center">
                Check-in
              </label>
              <input 
                type="date" 
                className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600 font-quicksand"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-teal-600 font-bubblegum flex items-center">
                Check-out
              </label>
              <input 
                type="date" 
                className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600 font-quicksand"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-teal-600 font-bubblegum flex items-center">
                Số phòng
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600 font-quicksand">
                <option>1 phòng</option>
                <option>2 phòng</option>
                <option>3 phòng</option>
                <option>4+ phòng</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button className="bg-teal-400 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition-colors duration-200 shadow-md hover:scale-105 transform transition-transform inline-flex items-center font-bubblegum">
              <span>Tìm khách sạn</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bubblegum text-gray-800">Danh sách Khách sạn</h2>
          <div className="text-teal-400 hover:text-teal-500 font-quicksand">
            {hotels.length} khách sạn có sẵn
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-teal-400 text-white text-sm font-bold px-2 py-1 rounded">
                  Từ {hotel.price}/đêm
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bubblegum text-lg mb-2">{hotel.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm font-quicksand">{hotel.location}</p>
                </div>
                <p className="text-gray-600 mb-4 text-sm font-quicksand">{hotel.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/hotels/${hotel.id}`} className="text-teal-400 hover:text-teal-500 font-bubblegum">
                    Xem chi tiết →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center">
          <Link href="/hotels/list">
          <button className="bg-teal-400 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition-colors duration-200 shadow-md hover:scale-105 transform transition-transform inline-flex items-center font-bubblegum">
            <span>Xem thêm khách sạn</span>
          </button>
          </Link>
        </div>
        </div>
    </div>
  );
}

const hotels = [
  {
    id: 1,
    name: 'Swiss-Belresort Đà Lạt',
    stars: 5,
    location: 'Đà Lạt',
    price: '1,200,000đ',
    description: 'Khách sạn 5 sao với view đẹp nhìn ra thành phố Đà Lạt',
    image: '/images/Home/Place/DALAT.jpg',
  },
  {
    id: 2,
    name: 'Vinpearl Resort Phú Quốc',
    stars: 5,
    location: 'Phú Quốc',
    price: '2,500,000đ',
    description: 'Resort sang trọng bên bờ biển với nhiều tiện ích giải trí',
    image: '/images/Home/Place/PHUQUOC.jpg',
  },
  {
    id: 3,
    name: 'Paradise Cruise Hạ Long',
    stars: 5,
    location: 'Hạ Long',
    price: '3,200,000đ',
    description: 'Du thuyền 5 sao với dịch vụ đẳng cấp quốc tế',
    image: '/images/Home/Place/HALONG.jpg',
  },
  {
    id: 4,
    name: 'Silk Path Grand Sapa',
    stars: 4,
    location: 'Sapa',
    price: '1,800,000đ',
    description: 'Khách sạn với view núi tuyệt đẹp tại trung tâm Sapa',
    image: '/images/Home/Place/SAPA.jpg',
  },
  {
    id: 5,
    name: 'Mường Thanh Luxury Nha Trang',
    stars: 5,
    location: 'Nha Trang',
    price: '1,600,000đ',
    description: 'Khách sạn cao cấp với view biển tuyệt đẹp',
    image: '/images/Home/Place/NHATRANG.jpg',
  },
  {
    id: 6,
    name: 'Hoi An Historic Hotel',
    stars: 4,
    location: 'Hội An',
    price: '1,400,000đ',
    description: 'Khách sạn phong cách cổ điển trong khu phố cổ',
    image: '/images/Home/Place/HOIAN.jpg',
  },
]; 