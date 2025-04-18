import Image from 'next/image';
import Link from 'next/link';

export default function ToursPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="bg-teal-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-teal-600 text-center">Cùng nhau khám phá những Tour du lịch tuyệt vời nào</h1>
          <p className="text-xl text-teal-500 text-center mb-8">Chúng tôi cung cấp nhiều tour du lịch hấp dẫn với đa dạng điểm đến và giá cả phù hợp</p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="container mx-auto px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-teal-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-teal-600 font-medium flex items-center">
                <span className="mr-2"></span> Điểm đến
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600">
                <option>Tất cả</option>
                <option>Đà Lạt</option>
                <option>Phú Quốc</option>
                <option>Hạ Long</option>
                <option>Sapa</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-teal-600 font-medium flex items-center">
                <span className="mr-2"></span> Thời gian
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600">
                <option>Tất cả</option>
                <option>1-3 ngày</option>
                <option>4-7 ngày</option>
                <option>8+ ngày</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-teal-600 font-medium flex items-center">
                <span className="mr-2"></span> Giá
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600">
                <option>Tất cả</option>
                <option>Dưới 2 triệu</option>
                <option>2-5 triệu</option>
                <option>Trên 5 triệu</option>
              </select>
            </div>
            
            <div className="space-y-2 flex flex-col justify-end">
              <label className="text-teal-600 font-medium flex items-center">
                <span className="mr-2"></span> Sắp xếp
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600">
                <option>Mới nhất</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
                <option>Phổ biến nhất</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button className="bg-teal-400 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition-colors duration-200 shadow-md hover:scale-105 transform transition-transform inline-flex items-center">
              <span>Tìm tour ngay</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Danh sách Tour</h2>
          <div className="text-teal-400 hover:text-teal-500 font-medium flex items-center">
            {tours.length} tour có sẵn
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-teal-400 text-white text-sm font-bold px-2 py-1 rounded">
                  {tour.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{tour.name}</h3>
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">{tour.duration}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 text-sm">{tour.location}</p>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/tours/${tour.id}`} className="text-teal-400 hover:text-teal-500 font-medium">
                    Chi tiết →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const tours = [
  {
    id: 1,
    name: 'Tour Đà Lạt 3N2Đ',
    duration: '3 ngày 2 đêm',
    location: 'Đà Lạt',
    price: '2,990,000đ',
    description: 'Khám phá thành phố ngàn hoa với những điểm đến nổi tiếng',
    image: '/images/Home/Place/DALAT.jpg',
  },
  {
    id: 2,
    name: 'Tour Phú Quốc 4N3Đ',
    duration: '4 ngày 3 đêm',
    location: 'Phú Quốc',
    price: '3,990,000đ',
    description: 'Trải nghiệm đảo ngọc với những bãi biển tuyệt đẹp',
    image: '/images/Home/Place/PHUQUOC.jpg',
  },
  {
    id: 3,
    name: 'Tour Hạ Long 2N1Đ',
    duration: '2 ngày 1 đêm',
    location: 'Hạ Long',
    price: '1,990,000đ',
    description: 'Khám phá vịnh di sản thế giới trên du thuyền sang trọng',
    image: '/images/Home/Place/HALONG.jpg',
  },
  {
    id: 4,
    name: 'Tour Sapa 3N2Đ',
    duration: '3 ngày 2 đêm',
    location: 'Sapa',
    price: '2,490,000đ',
    description: 'Trải nghiệm văn hóa vùng cao và cảnh quan tuyệt đẹp',
    image: '/images/Home/Place/SAPA.jpg',
  },
  {
    id: 5,
    name: 'Tour Nha Trang 4N3Đ',
    duration: '4 ngày 3 đêm',
    location: 'Nha Trang',
    price: '3,490,000đ',
    description: 'Tham quan thành phố biển xinh đẹp và các đảo lân cận',
    image: '/images/Home/Place/NHATRANG.jpg',
  },
  {
    id: 6,
    name: 'Tour Hội An 3N2Đ',
    duration: '3 ngày 2 đêm',
    location: 'Hội An',
    price: '2,790,000đ',
    description: 'Khám phá phố cổ Hội An và các di sản văn hóa',
    image: '/images/Home/Place/HOIAN.jpg',
  },
];