import Image from 'next/image';
import Link from 'next/link';

export default function DaLatTourPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/images/Home/Place/DALAT.jpg"
          alt="Đà Lạt"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Du lịch Đà Lạt</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Khám phá thành phố ngàn hoa với những điểm đến nổi tiếng và khí hậu mát mẻ quanh năm
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Điểm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
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
            {dalatTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const highlights = [
  {
    icon: "🌸",
    title: "Thành phố ngàn hoa",
    description: "Nổi tiếng với các vườn hoa và công viên tuyệt đẹp quanh năm"
  },
  {
    icon: "⛰️",
    title: "Khí hậu mát mẻ",
    description: "Nhiệt độ trung bình 15-25°C, lý tưởng cho du lịch nghỉ dưỡng"
  },
  {
    icon: "🏰",
    title: "Kiến trúc độc đáo",
    description: "Những công trình kiến trúc Pháp cổ điển đặc trưng"
  }
];

const dalatTours = [
  {
    id: "dalat-1",
    name: "Đà Lạt City Tour 1 ngày",
    duration: "1 ngày",
    price: "590,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/Home/Place/DALAT.jpg"
  },
  {
    id: "dalat-2",
    name: "Đà Lạt City Tour 2 ngày",
    duration: "2 ngày",
    price: "1,190,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/Home/Place/DALAT.jpg"
  },
  {
    id: "dalat-3",
    name: "Đà Lạt City Tour 3 ngày",
    duration: "3 ngày",
    price: "1,790,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/Home/Place/DALAT.jpg"
  },
  {
    id: "dalat-4",
    name: "Đà Lạt City Tour 4 ngày",
    duration: "4 ngày",
    price: "2,390,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/dalat/city-tour.jpg"
  },
  {
    id: "dalat-5",
    name: "Đà Lạt City Tour 5 ngày",
    duration: "5 ngày",
    price: "2,990,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/Home/Place/DALAT.jpg"
  },
  {
    id: "dalat-6",
    name: "Đà Lạt City Tour 6 ngày",
    duration: "6 ngày",
    price: "3,590,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/Home/Place/DALAT.jpg"
  }
];

const attractions = [
  {
    name: "Hồ Xuân Hương",
    description: "Hồ nước ngọt nhân tạo nằm giữa trung tâm thành phố",
    image: "/images/attractions/dalat/ho-xuan-huong.jpg"
  },
  {
    name: "Đồi Bà Đen",
    description: "Đồi núi đá vôi cao 1.700m, có cảnh quan thiên nhiên đẹp",
    image: "/images/attractions/dalat/doi-ba-den.jpg"
  },
  {
    name: "Vườn hoa Cầu Đông",
    description: "Vườn hoa nổi tiếng với nhiều loài hoa đẹp mắt",
    image: "/images/attractions/dalat/vuon-hoa-cau-dong.jpg"
  },
  {
    name: "Chùa Linh Ứng",
    description: "Chùa cổ điển với cảnh quan thiên nhiên tuyệt đẹp",
    image: "/images/attractions/dalat/chua-linh-ung.jpg"
  }
  // Thêm các điểm tham quan khác
];

const travelTips = [
  {
    icon: "🌤️",
    title: "Thời điểm lý tưởng",
    content: "Tháng 12 đến tháng 3 là thời điểm đẹp nhất để du lịch Đà Lạt"
  },
  {
    icon: "🚨",
    title: "An toàn khi đi du lịch",
    content: "Rửa tay thường xuyên và sử dụng khẩu trang khi đi ra ngoài"
  },
  

  // Thêm các tips khác
]; 