import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 shadow-2xl">
          <Image 
            src="/images/About/about1.jpg"
            alt="Vivu Xanh"
            fill
            className="object-cover brightness-105 contrast-110"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        </div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white drop-shadow-lg">
            <h1 className="text-5xl font-inin mb-6 text-shadow-lg">
              Chào mừng đến với Vivu Xanh 
              <span className="block text-2xl mt-4 font-fredoka">Nơi mỗi chuyến đi là một câu chuyện đáng nhớ</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Câu chuyện của chúng tôi */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Image Section */}
      <div className="relative group">
        <div className="w-full h-[350px] relative rounded-3xl overflow-hidden shadow-lg">
          <Image 
            src="/images/About/about2.png"
            alt="Câu chuyện của chúng tôi"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-xl shadow-xl border border-teal-200">
          <p className="text-teal-600 font-semibold text-lg tracking-wider">Est. 2020</p>
        </div>
      </div>

      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-fredoka text-gray-800 mb-6 leading-snug">
          Câu chuyện của <span className="text-teal-600">chúng tôi</span>
        </h2>
        <div className="space-y-5 text-gray-700 font-fredoka text-lg leading-relaxed">
          <p>
            Vivu Xanh được thành lập với một ước mơ đơn giản: Tạo ra những trải nghiệm du lịch 
            không chỉ đáng nhớ mà còn góp phần bảo vệ môi trường và phát triển cộng đồng địa phương.
          </p>
          <p>
            Chúng tôi bắt đầu từ những tour nhỏ tại Đà Lạt, và dần dần mở rộng ra khắp Việt Nam. 
            Mỗi hành trình được thiết kế với tâm huyết, mang đến góc nhìn độc đáo về văn hóa và thiên nhiên Việt Nam.
          </p>
          <p>
            Với triết lý <strong>“Du lịch bền vững – Trải nghiệm chân thực”</strong>, Vivu Xanh ưu tiên hợp tác 
            với các nhà cung cấp địa phương, sử dụng dịch vụ thân thiện với môi trường và giảm thiểu rác thải nhựa.
          </p>
          <p>
            Không chỉ là các điểm đến nổi tiếng, chúng tôi còn đưa du khách khám phá những làng quê yên bình, 
            nơi văn hóa truyền thống vẫn còn nguyên vẹn và đậm đà bản sắc.
          </p>
          <p>
            Đội ngũ hướng dẫn viên của chúng tôi là những người giàu đam mê, am hiểu vùng đất bản địa 
            và luôn sẵn sàng đồng hành để mang đến trải nghiệm an toàn, sâu sắc và trọn vẹn nhất.
          </p>
          <p>
            Trong tương lai, Vivu Xanh hướng tới xây dựng một cộng đồng du lịch có trách nhiệm – 
            nơi mỗi chuyến đi là một đóng góp thiết thực cho môi trường và cộng đồng.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Giá trị cốt lõi */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Giá trị cốt lõi của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đội ngũ của chúng tôi */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Gặp gỡ đội ngũ của chúng tôi
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex flex-nowrap gap-8 justify-center">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="min-w-[300px] max-w-[400px] bg-white rounded-xl p-6 shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative w-50 h-50 rounded-full overflow-hidden border-4 border-teal-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-teal-500 text-4xl opacity-30 mb-2">"</div>
                  <p className="text-gray-600 italic mb-4">{member.quote}</p>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-teal-500">{member.position}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3].map((dot) => (
                <button 
                  key={dot} 
                  className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-teal-500' : 'bg-gray-300'}`}
                  aria-label={`Chuyển đến slide ${dot + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Con số ấn tượng */}
      {/* Stats Counter - New */}
      <section className="bg-teal-500 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Khách hàng hài lòng", icon: "😊" },
              { number: "200+", label: "Tour độc đáo", icon: "🎯" },
              { number: "50+", label: "Điểm đến", icon: "🗺️" },
              { number: "100%", label: "Cam kết hoàn tiền", icon: "💰" }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đối tác của chúng tôi */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Đối tác đồng hành
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Hãy cùng nhau tạo nên những kỷ niệm đáng nhớ
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trong mọi hành trình
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-colors duration-300"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </div>
  );
}

const coreValues = [
  {
    icon: "🌱",
    title: "Du lịch bền vững",
    description: "Chúng tôi cam kết tạo ra những trải nghiệm du lịch có trách nhiệm, tôn trọng môi trường và văn hóa địa phương."
  },
  {
    icon: "💚",
    title: "Trải nghiệm chân thực",
    description: "Mỗi tour được thiết kế để mang đến những trải nghiệm đích thực nhất về văn hóa và con người Việt Nam."
  },
  {
    icon: "🤝",
    title: "Dịch vụ tận tâm",
    description: "Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ 24/7, đảm bảo chuyến đi của bạn diễn ra suôn sẻ."
  }
];

const teamMembers = [
  {
    name: "Lê Hoàng Hải",
    position: "Người sáng lập & CEO",
    quote: "Mỗi chuyến đi là một câu chuyện mới",
    image: "/images/About/CEO.jpg"
  },
  {
    name: "Huỳnh Hữu Toàn",
    position: "Phó giám đốcc",
    quote: "Uy tín là chìa khóa để thành công",
    image: "/images/About/CEO.jpg"
  },
  {
    name: "Lê Hoàng Trọng",
    position: "Trưởng phòng Marketing",
    quote: "Khách hàng là trung tâm của tất cả",
    image: "/images/About/Marketing.jpg"
  },

  // Thêm các thành viên khác
];

const partners = [
  {
    name: "Vietnam Airlines",
    logo: "/images/About/VietnamAirlines.jpg"
  },
  {
    name: "Vietjet",
    logo: "/images/About/Vietjet.png"
  },
  {
    name: "Bamboo Airways",
    logo: "/images/About/BambooAirways.png"
  },
  {
    name: "Jetstar",
    logo: "/images/About/Jetstar.png"
  },
]; 
