import Image from "next/image";
import Link from "next/link";
import heroBackground from '/public/images/Home/herobackground.jpg';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section - Enhanced */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src={heroBackground}
          alt="Hero background"
          fill
          className="object-cover transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 to-blue-500/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="bg-white/90 p-10 rounded-[2rem] shadow-2xl border-4 border-teal-300 max-w-2xl transform hover:scale-105 transition-all duration-500">
            <div className="animate-float">
              <h1 className="text-6xl font-bold mb-6 text-teal-500 font-comic leading-tight">
                Vivu Xanh 
                <span className="block text-3xl text-teal-400 mt-2">Hành trình xanh - Kỷ niệm xanh</span>
              </h1>
            </div>
            <p className="text-xl mb-8 text-teal-700 leading-relaxed">
              Khám phá Việt Nam tuyệt vời cùng những người bạn thân thiện và dịch vụ tận tâm 
            </p>
            <div className="flex gap-4">
              <Link
                href="/tours"
                className="bg-teal-400 text-white px-8 py-4 rounded-full text-lg hover:bg-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-300/50 transform hover:-translate-y-1 inline-flex items-center"
              >
                <span>Khám phá ngay</span>
                <span className="ml-2"></span>
              </Link>
              <Link
                href="/about"
                className="bg-white text-teal-500 px-8 py-4 rounded-full text-lg border-2 border-teal-400 hover:bg-teal-50 transition-all duration-300 inline-flex items-center"
              >
                <span>Tìm hiểu thêm</span>
                <span className="ml-2"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - New */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-96 h-96 bg-teal-100 rounded-full absolute -top-10 -left-10 animate-pulse-slow"></div>
            <Image
              src="/images/mascot.png"
              alt="Vivu Xanh Mascot"
              width={500}
              height={500}
              className="relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-teal-600 mb-6">
              Chào mừng đến với Vivu Xanh
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chúng tôi không chỉ đơn thuần là một công ty du lịch - chúng tôi là những người bạn đồng hành, 
              mang đến cho bạn những trải nghiệm du lịch độc đáo và thân thiện với môi trường.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-2xl">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-xl font-bold text-teal-600 mb-2">Sứ mệnh</h3>
                <p className="text-gray-600">Mang đến trải nghiệm du lịch xanh, bền vững</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-2xl">
                <div className="text-3xl mb-2">💚</div>
                <h3 className="text-xl font-bold text-teal-600 mb-2">Giá trị</h3>
                <p className="text-gray-600">Tận tâm, chất lượng và thân thiện</p>
              </div>
            </div>
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

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-r from-teal-400 to-blue-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Sẵn sàng cho chuyến đi tiếp theo? 🌟
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận được những ưu đãi đặc biệt và thông tin về các tour mới nhất!
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/tours"
              className="bg-white text-teal-500 px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Đặt tour ngay 🎉
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-full text-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Liên hệ tư vấn 💌
            </Link>
          </div>
        </div>
      </section>
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
