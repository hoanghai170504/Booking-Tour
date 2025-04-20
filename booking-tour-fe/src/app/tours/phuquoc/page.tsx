import Image from 'next/image';
import Link from 'next/link';

export default function PhuQuocTourPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/images/Home/Place/PHUQUOC.jpg"
          alt="Phú Quốc"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Du lịch Phú Quốc</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Khám phá đảo ngọc với những bãi biển trong xanh và ẩm thực độc đáo
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Điểm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phuquocHighlights.map((item, index) => (
            <div key={index} className="bg-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Tours */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Tour Đà Lạt phổ biến</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phuquocTours.map((tour) => (
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
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>
                  <Link href={`/tours/${tour.id}`} className="text-teal-400 hover:text-teal-500 font-medium">
                    Chi tiết →
                  </Link>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Điểm tham quan nổi tiếng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <div key={index} className="group relative h-80 rounded-xl overflow-hidden">
              <Image
                src={attraction.image}
                alt={attraction.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{attraction.name}</h3>
                <p className="text-white/90">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-teal-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Kinh nghiệm du lịch Đà Lạt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections similar to Dalat page... */}
    </div>
  );
}

const phuquocHighlights = [
  {
    icon: "🏖️",
    title: "Biển đảo thiên đường",
    description: "Bãi biển cát trắng mịn với làn nước trong xanh tuyệt đẹp"
  },
  {
    icon: "🦪",
    title: "Thiên đường hải sản",
    description: "Trải nghiệm ẩm thực biển tươi ngon đặc trưng"
  },
  {
    icon: "🎣",
    title: "Hoạt động đa dạng",
    description: "Từ câu cá đến lặn ngắm san hô và khám phá đảo hoang"
  }
];
const phuquocTours = [
  {
    id: "phuquoc-1",
    name: "Tour Phú Quốc 1 ngày",
    duration: "1 ngày",
    price: "1,190,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/phuquoc/phuquoc-tour.jpg"
  },
  {
    id: "phuquoc-2",
    name: "Tour Phú Quốc 2 ngày",
    duration: "2 ngày",
    price: "2,390,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/phuquoc/phuquoc-tour.jpg"
  },
  {
    id: "phuquoc-3",
    name: "Tour Phú Quốc 3 ngày",
    duration: "3 ngày",
    price: "3,590,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/phuquoc/phuquoc-tour.jpg"
  },
  {
    id: "phuquoc-4",
    name: "Tour Phú Quốc 4 ngày",
    duration: "4 ngày",
    price: "4,790,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/phuquoc/phuquoc-tour.jpg"
  }
];

const travelTips = [
  {
    title: "Chuẩn bị thực đơn",
    content: "Chuẩn bị thực đơn trước khi đi du lịch để tránh bị ngỡ ngàng về giá cả"
  },
  {
    title: "Uống nước",
    content: "Uống nước để tránh bị mất nước"
  },
  {
    title: "Đội mũ bảo hiểm",
    content: "Đội mũ bảo hiểm để tránh bị ngã"
  },
];

const attractions = [
  {
    name: "Bãi biển đảo ngọc",
    description: "Bãi biển cát trắng mịn với làn nước trong xanh tuyệt đẹp",
    image: "/images/tours/phuquoc/phuquoc-attraction.jpg"
  },
  {
    name: "Đảo Phú Quốc",
    description: "Đảo Phú Quốc là đảo lớn nhất Việt Nam, có nhiều điểm tham quan hấp dẫn",
    image: "/images/tours/phuquoc/phuquoc-attraction.jpg"
  },
  {
    name: "An Thới Đông",
    description: "An Thới Đông là một điểm tham quan hấp dẫn trên đảo Phú Quốc",
    image: "/images/tours/phuquoc/phuquoc-attraction.jpg"
  },
  {
    name: "Đảo Trường Sa",
    description: "Đảo Trường Sa là đảo nhỏ nhất Việt Nam, có nhiều điểm tham quan hấp dẫn",
    image: "/images/tours/phuquoc/phuquoc-attraction.jpg"
  },
];
