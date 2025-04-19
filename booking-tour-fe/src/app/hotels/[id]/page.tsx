import Image from 'next/image';
import Link from 'next/link';

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-quicksand">
            <Link href="/" className="text-gray-500 hover:text-teal-500">Trang chủ</Link>
            <span className="text-gray-500">/</span>
            <Link href="/hotels" className="text-gray-500 hover:text-teal-500">Tìm khách sạn</Link>
            <span className="text-gray-500">/</span>
            <span className="text-teal-500">Grand Tourane Hotel Đà Nẵng</span>
          </div>
        </div>
      </div>

      {/* Hotel Header */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bubblegum mb-2">Grand Tourane Hotel Đà Nẵng</h1>
            <p className="text-gray-500 font-quicksand flex items-center gap-2">
              <span>252 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng</span>
              <Link href="#map" className="text-teal-500 hover:underline">Xem bản đồ và địa chỉ</Link>
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 line-through font-quicksand">1,900,000 đ/ PHÒNG</p>
            <p className="text-3xl font-bubblegum text-teal-600">1,650,000 đ/ phòng</p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 h-[500px]">
          <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
            <Image
              src="/images/Home/Place/PHUQUOC.jpg"
              alt="Hotel main"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/Home/Place/PHUQUOC.jpg"
              alt="Hotel view"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/Home/Place/PHUQUOC.jpg"
              alt="Hotel room"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/Home/Place/PHUQUOC.jpg"
              alt="Hotel pool"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/Home/Place/PHUQUOC.jpg"
              alt="Hotel spa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Hotel Features */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bubblegum mb-4">Đặc điểm nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 text-gray-600 font-quicksand">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Lễ tân 24h
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-quicksand">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Wifi miễn phí
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-quicksand">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Bể bơi ngoài trời
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-quicksand">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
            Nhà hàng
          </div>
        </div>
      </div>

      {/* Room Types */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bubblegum mb-4">Các loại phòng & giá</h2>
        <div className="space-y-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bubblegum text-lg mb-1">{room.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-quicksand">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {room.capacity}
                    </span>
                    <span>{room.view}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bubblegum text-teal-600">{room.price}</p>
                <p className="text-sm text-gray-500 font-quicksand">/đêm</p>
                <button className="mt-2 bg-teal-400 text-white px-6 py-2 rounded-full hover:bg-teal-500 transition-colors font-bubblegum">
                  Đặt ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bubblegum mb-4">Giới thiệu</h2>
        <div className="prose max-w-none font-quicksand">
          <p>Grand Tourane Hotel Đà Nẵng là một trong những khách sạn lớn tọa lạc bên Bãi biển Mỹ Khê Đà Nẵng, nổi bật với không gian nghỉ ngơi được thiết kế trang nhã và dịch vụ chuyên nghiệp, chu đáo.</p>
          <p>Sở hữu 188 phòng nghỉ hiện đại cung cấp nhiều tiện ích hấp dẫn như phòng hội nghị, sân chơi tennis, phòng tập, spa thư giãn,... đây chắc chắn sẽ là sự lựa chọn hoàn hảo dành cho kỳ nghỉ dưỡng hay chuyến đi công tác của bạn.</p>
        </div>
      </div>

      {/* Map */}
      <div id="map" className="container mx-auto px-6 mb-8">
        <h2 className="text-2xl font-bubblegum mb-4">Bản đồ và địa chỉ</h2>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="font-quicksand mb-4">Khách sạn Grand Tourane Hotel Đà Nẵng tại 252 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng</p>
          <div className="h-[400px] rounded-lg overflow-hidden">
            {/* Add your map component here */}
          </div>
        </div>
      </div>
    </div>
  );
}

const rooms = [
  {
    id: 1,
    name: 'Superior City View',
    size: '32 m²',
    capacity: 'Twin/Queen',
    view: 'City view',
    price: '1,600,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
  },
  {
    id: 2,
    name: 'Deluxe City View',
    size: '40 m²',
    capacity: 'Twin/Queen',
    view: 'City View',
    price: '2,050,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
  },
  {
    id: 3,
    name: 'Premier Deluxe Ocean View',
    size: '42 m²',
    capacity: 'Twin/Queen',
    view: 'Ocean View',
    price: '2,700,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
  },
  // Thêm các loại phòng khác
]; 