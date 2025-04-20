import Image from 'next/image';
import Link from 'next/link';

export default function SapaTourPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/images/Home/Place/SAPA.jpg"
          alt="Sapa"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4">Du lịch Sapa</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Khám phá thị trấn trong mây với ruộng bậc thang và văn hóa dân tộc độc đáo
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Điểm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sapaHighlights.map((item, index) => (
            <div key={index} className="bg-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Tour Sapa phổ biến</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sapaTours.map((tour) => (
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
      </section>    

      {/* Rest of the sections similar to Dalat page... */}
    </div>
  );
}

const sapaHighlights = [
  {
    icon: "🗻",
    title: "Núi Fansipan",
    description: "Chinh phục nóc nhà Đông Dương với độ cao 3,143m"
  },
  {
    icon: "🌾",
    title: "Ruộng bậc thang",
    description: "Những thửa ruộng bậc thang tuyệt đẹp quanh năm"
  },
  {
    icon: "👘",
    title: "Văn hóa dân tộc",
    description: "Trải nghiệm văn hóa độc đáo của người H'Mông và Dao"
  },
];

const sapaTours = [
  {
    id: "sapa-1",
    name: "Tour Sapa 1 ngày",
    duration: "1 ngày", 
    price: "1,190,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/sapa/sapa-tour.jpg"
  },
  {
    id: "sapa-2",
    name: "Tour Sapa 2 ngày",
    duration: "2 ngày",
    price: "1,790,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/sapa/sapa-tour.jpg"
  },
  {
    id: "sapa-3",
    name: "Tour Sapa 3 ngày",
    duration: "3 ngày",
    price: "2,390,000đ",
        description: "Tham quan các điểm đến nổi tiếng trong thành phố",
        image: "/images/tours/sapa/sapa-tour.jpg"
    },
    {
    id: "sapa-4",
    name: "Tour Sapa 4 ngày",
    duration: "4 ngày",
    price: "3,590,000đ",
    description: "Tham quan các điểm đến nổi tiếng trong thành phố",
    image: "/images/tours/sapa/sapa-tour.jpg"
  }
];

// Thêm các data khác tương tự... 