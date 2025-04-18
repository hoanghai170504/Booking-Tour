import Image from 'next/image';
import Link from 'next/link';

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = tours.find((t) => t.id === parseInt(params.id));

  if (!tour) {
    return <div>Tour không tồn tại</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tour Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{tour.name}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-4">⏱ {tour.duration}</span>
          <span>📍 {tour.location}</span>
          <span className="ml-4 text-blue-600 font-bold">{tour.price}</span>
        </div>
      </div>

      {/* Tour Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2 relative h-96">
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-rows-2 gap-4">
          {tour.gallery?.map((image, index) => (
            <div key={index} className="relative h-44">
              <Image
                src={image}
                alt={`${tour.name} ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tour Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Mô tả tour</h2>
            <p className="text-gray-600">{tour.description}</p>
          </section>

          {/* Itinerary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Lịch trình</h2>
            <div className="space-y-4">
              {tour.itinerary?.map((day, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-2">Ngày {index + 1}</h3>
                  <p className="text-gray-600">{day}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Included */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dịch vụ bao gồm</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tour.included?.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-green-500 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Not Included */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Dịch vụ không bao gồm</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tour.notIncluded?.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-bold mb-4">Đặt tour</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày khởi hành
              </label>
              <input
                type="date"
                className="w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số lượng người
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm">
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
                className="w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                className="w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Đặt tour ngay
            </button>
          </form>
        </div>
      </div>
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
    description: 'Khám phá thành phố ngàn hoa với những điểm đến nổi tiếng. Tour bao gồm tham quan các địa điểm nổi tiếng như Hồ Xuân Hương, Nhà thờ Con Gà, Chợ Đà Lạt, và nhiều điểm đến hấp dẫn khác.',
    image: '/images/tour-dalat.jpg',
    gallery: [
      '/images/dalat-1.jpg',
      '/images/dalat-2.jpg',
      '/images/dalat-3.jpg',
      '/images/dalat-4.jpg',
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