import Image from "next/image";
import Link from "next/link";
import heroBackground from '/public/images/Home/herobackground.jpg';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src={heroBackground}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-teal-100/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="bg-white/80 p-8 rounded-3xl shadow-lg border-4 border-teal-300 max-w-2xl animate-bounce-slow">
            <h1 className="text-5xl font-bold mb-4 text-teal-500 font-comic">
              Khám phá thế giới cùng Vivu Xanh
            </h1>
            <p className="text-xl mb-8 text-teal-600">
              Trải nghiệm những chuyến đi tuyệt vời với dịch vụ đặt tour chất lượng cao
            </p>
            <Link
              href="/tours"
              className="bg-teal-400 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-500 transition-colors duration-200 shadow-md hover:scale-105 transform transition-transform inline-flex items-center"
            >
              Khám phá ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-teal-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-teal-600 font-medium flex items-center">
                <span className="mr-2"></span> Điểm đến yêu thích
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600">
                <option>Chọn điểm đến nào...</option>
                <option>Đà Lạt </option>
                <option>Phú Quốc </option>
                <option>Hạ Long </option>
                <option>Sapa </option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-teal-600 font-medium flex items-center">
                <span className="mr-2"></span> Ngày bắt đầu vui chơi
              </label>
              <input type="date" className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600" />
            </div>
            <div className="space-y-2">
              <label className="text-teal-600 font-medium flex items-center">
                <span className="mr-2"></span> Bạn đi mấy người?
              </label>
              <select className="w-full p-3 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-600">
                <option>1 người thôi</option>
                <option>2 người nè</option>
                <option>3 người nè</option>
                <option>Cả nhà mình đi</option>
              </select>
            </div>
            <div className="space-y-2 flex flex-col justify-end">
              <button className="w-full bg-teal-400 text-white p-3 rounded-full hover:bg-teal-500 transition-colors duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-transform flex items-center justify-center">
                <span>Tìm chuyến đi nào</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Điểm đến phổ biến của Vivu Xanh</h2>
          <Link href="/destinations" className="text-teal-400 hover:text-teal-500 font-medium flex items-center">
            Xem tất cả
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="group relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-gray-200">{destination.description}</p>
                <Link href={`/destinations/${destination.id}`} className="mt-3 inline-block text-white hover:text-teal-400 transition-colors duration-200 font-medium">
                  Khám phá
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tours */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Tour nổi bật</h2>
            <Link href="/tours" className="text-teal-400 hover:text-teal-500 font-medium flex items-center">
              Xem tất cả
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-teal-400 text-white text-sm font-bold px-2 py-1 rounded">
                    Nổi bật
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
                  <div className="flex justify-between items-center">
                    <p className="text-teal-400 font-bold text-lg">{tour.price}</p>
                    <Link href={`/tours/${tour.id}`} className="text-teal-400 hover:text-teal-500 font-medium">
                      Chi tiết →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 animate-bounce">Tại sao chọn chúng tôi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="text-center p-6 rounded-2xl border-4 border-dashed border-teal-300 hover:border-teal-400 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-teal-600">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Đánh giá từ khách hàng */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-800 relative">
            <span className="relative z-10 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-teal-400 after:rounded-full">Trải nghiệm khách hàng</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute -top-5 left-8 text-5xl text-teal-300 opacity-50">"</div>
                
                <p className="text-gray-700 mb-6 pt-4 relative z-10">{testimonial.comment}</p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-teal-400 ring-offset-2">
                    <Image src={testimonial.avatar} alt={testimonial.name} width={56} height={56} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-teal-600 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đăng ký nhận tin */}
      {/* <section className="container mx-auto px-6 py-10">
        <div className="bg-teal-400 rounded-lg p-10 shadow-md">
          <div className="text-center md:flex md:justify-between md:items-center">
            <div className="mb-4 md:mb-0 md:text-left">
              <h2 className="text-xl font-bold text-white mb-2">Đăng ký nhận thông tin ưu đãi</h2>
              <p className="text-white text-sm">Nhận thông tin về các chương trình khuyến mãi và tour mới nhất.</p>
            </div>
            <div className="md:w-1/3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="flex-grow p-2 rounded-l-md border-0" 
                />
                <button className="bg-white text-teal-500 px-4 py-2 rounded-r-md">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

const destinations = [
  {
    id: 1,
    name: 'Đà Lạt',
    description: 'Thành phố ngàn hoa',
    image: '/images/Home/Place/DALAT.jpg',
  },
  {
    id: 2,
    name: 'Phú Quốc',
    description: 'Đảo ngọc Việt Nam',
    image: '/images/Home/Place/PHUQUOC.jpg',
  },
  {
    id: 3,
    name: 'Hạ Long',
    description: 'Vịnh di sản thế giới',
    image: '/images/Home/Place/HALONG.jpg',
  },
];

const featuredTours = [
  {
    id: 1,
    name: 'Tour Đà Lạt 3N2Đ',
    duration: '3 ngày 2 đêm',
    price: '2,990,000đ',
    image: '/images/Home/Place/DALAT.jpg',
  },
  {
    id: 2,
    name: 'Tour Phú Quốc 4N3Đ',
    duration: '4 ngày 3 đêm',
    price: '3,990,000đ',
    image: '/images/Home/Place/PHUQUOC.jpg',
  },
  {
    id: 3,
    name: 'Tour Hạ Long 2N1Đ',
    duration: '2 ngày 1 đêm',
    price: '1,990,000đ',
    image: '/images/Home/Place/HALONG.jpg',
  },
  {
    id: 4,
    name: 'Tour Sapa 3N2Đ',
    duration: '3 ngày 2 đêm',
    price: '2,490,000đ',
    image: '/images/Home/Place/SAPA.jpg',
  },
];

const features = [
  {
    id: 1,
    title: 'Giá tốt nhất',
    description: 'Cam kết mang đến mức giá tốt nhất cho khách hàng',
    icon: '💰',
  },
  {
    id: 2,
    title: 'Dịch vụ chất lượng',
    description: 'Đội ngũ nhân viên chuyên nghiệp, nhiệt tình',
    icon: '⭐',
  },
  {
    id: 3,
    title: 'Hỗ trợ 24/7',
    description: 'Luôn sẵn sàng hỗ trợ bạn mọi lúc',
    icon: '🛟',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    location: 'Hà Nội',
    comment: 'Tôi đã có một kỳ nghỉ tuyệt vời tại Đà Lạt nhờ dịch vụ của Booking Tour. Nhân viên rất nhiệt tình và chuyên nghiệp.',
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    location: 'TP.HCM',
    comment: 'Tour Phú Quốc thật sự đáng đồng tiền bát gạo. Tôi sẽ tiếp tục sử dụng dịch vụ của Booking Tour trong tương lai.',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: 3,
    name: 'Lê Văn C',
    location: 'Đà Nẵng',
    comment: 'Đội ngũ hướng dẫn viên rất chuyên nghiệp và thân thiện. Chuyến đi Hạ Long của gia đình tôi thật tuyệt vời.',
    avatar: '/images/avatar-3.jpg',
  },
];
