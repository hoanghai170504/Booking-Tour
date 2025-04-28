"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

// Dữ liệu mẫu (copy từ trang blogs)
const sampleBlogs = [
  {
    id: "1",
    title: "Khám phá vẻ đẹp Hạ Long",
    content: "Vịnh Hạ Long là một di sản thiên nhiên thế giới được UNESCO công nhận, nổi tiếng với hàng nghìn hòn đảo đá vôi hùng vĩ và những hang động kỳ bí. Du khách có thể tham gia tour du lịch bằng thuyền, khám phá hang động, tắm biển và thưởng thức hải sản tươi ngon.\n\nVịnh Hạ Long có diện tích 1.553 km² bao gồm 1.969 hòn đảo đá vôi, phần lớn là đảo đá vôi, trong đó có 989 đảo có tên và 980 đảo chưa có tên. Các đảo đá vôi cao từ 50m đến 100m và có độ cao trung bình trong khoảng từ 5m đến 10m. Khu vực trung tâm của vịnh có diện tích 335 km² với 775 đảo.\n\nDu khách đến Hạ Long có thể tham gia nhiều hoạt động thú vị như:\n- Tour thuyền tham quan vịnh\n- Khám phá các hang động như hang Sửng Sốt, hang Đầu Gỗ\n- Chèo kayak khám phá các đảo nhỏ\n- Tắm biển tại các bãi tắm đẹp\n- Thưởng thức hải sản tươi ngon\n- Ngắm hoàng hôn trên vịnh\n\nThời điểm lý tưởng để du lịch Hạ Long là từ tháng 3 đến tháng 11, khi thời tiết dễ chịu và ít mưa. Du khách nên đặt tour trước để có được mức giá tốt và dịch vụ chất lượng.",
    image: "/images/Home/Place/HALONG.jpg",
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15"
  },
  {
    id: "2",
    title: "Đà Lạt - Thành phố ngàn hoa",
    content: "Đà Lạt nổi tiếng với khí hậu mát mẻ quanh năm, những đồi thông bạt ngàn và vườn hoa rực rỡ. Thành phố này là điểm đến lý tưởng cho những ai muốn trốn cái nóng oi ả của mùa hè, thưởng thức cà phê và ngắm nhìn những công trình kiến trúc Pháp cổ kính.\n\nĐà Lạt được mệnh danh là 'Paris của Việt Nam' với kiến trúc độc đáo và khí hậu ôn hòa. Nhiệt độ trung bình quanh năm từ 18-25°C, khiến nơi đây trở thành điểm nghỉ dưỡng lý tưởng.\n\nNhững địa điểm không thể bỏ qua khi đến Đà Lạt:\n- Quảng trường Lâm Viên\n- Nhà thờ Con Gà\n- Ga xe lửa cổ\n- Hồ Xuân Hương\n- Thung lũng Tình Yêu\n- Vườn hoa thành phố\n- Các quán cà phê view đẹp\n\nĐà Lạt còn nổi tiếng với ẩm thực đặc sắc như:\n- Bánh tráng nướng\n- Kem bơ\n- Lẩu bò\n- Cà phê sữa đá\n- Rau củ quả tươi\n\nThời điểm đẹp nhất để du lịch Đà Lạt là từ tháng 12 đến tháng 3, khi thời tiết mát mẻ và khô ráo, hoa nở rộ.",
    image: "/images/Home/Place/DALAT.jpg",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14"
  },
  {
    id: "3",
    title: "Nha Trang - Thiên đường biển đảo",
    content: "Nha Trang là một trong những điểm đến biển đẹp nhất Việt Nam, với bãi biển dài, nước trong xanh và những hòn đảo hoang sơ. Du khách có thể lặn biển ngắm san hô, tham gia các hoạt động thể thao dưới nước và thưởng thức ẩm thực biển đặc trưng.\n\nBãi biển Nha Trang trải dài 6km với cát trắng mịn và nước biển trong xanh. Thành phố được bao quanh bởi những ngọn núi và vịnh biển đẹp, tạo nên khung cảnh thiên nhiên tuyệt vời.\n\nCác hoạt động giải trí hấp dẫn:\n- Tắm biển và tắm nắng\n- Lặn biển ngắm san hô\n- Tour 4 đảo\n- Vinpearl Land\n- Tháp Bà Ponagar\n- I-resort với tắm bùn khoáng\n\nẨm thực Nha Trang nổi tiếng với:\n- Hải sản tươi sống\n- Bún cá\n- Nem nướng\n- Bánh căn\n- Bánh xèo mực\n\nThời điểm lý tưởng để du lịch Nha Trang là từ tháng 3 đến tháng 9, khi thời tiết khô ráo và nắng đẹp.",
    image: "/images/Home/Place/NHATRANG.jpg",
    createdAt: "2024-03-13",
    updatedAt: "2024-03-13"
  },
  {
    id: "4",
    title: "Hội An - Phố cổ đẹp nhất Việt Nam",
    content: "Hội An là một di sản văn hóa thế giới với kiến trúc cổ kính độc đáo, những ngôi nhà gỗ truyền thống và chiếc cầu Nhật Bản nổi tiếng. Vào mỗi đêm rằm, phố cổ được thắp sáng bởi hàng nghìn chiếc đèn lồng, tạo nên không gian lãng mạn và huyền ảo.\n\nPhố cổ Hội An được UNESCO công nhận là Di sản Văn hóa Thế giới năm 1999, với hơn 1.000 di tích kiến trúc từ phố xá, nhà cửa, hội quán, đình, chùa, miếu, giếng cổ...\n\nNhững điểm tham quan không thể bỏ qua:\n- Chùa Cầu Nhật Bản\n- Phố đèn lồng\n- Nhà cổ Tấn Ký\n- Hội quán Phúc Kiến\n- Bãi biển An Bàng\n- Làng rau Trà Quế\n\nẨm thực đặc sắc:\n- Cao lầu\n- Mì Quảng\n- Hoành thánh\n- Bánh mì Phượng\n- Cơm gà\n\nThời điểm đẹp nhất để thăm Hội An là từ tháng 2 đến tháng 4, khi thời tiết mát mẻ và ít mưa. Đặc biệt vào đêm rằm hàng tháng, phố cổ sẽ tổ chức đêm phố cổ với đèn lồng lung linh.",
    image: "/images/Home/Place/HOIAN.jpg",
    createdAt: "2024-03-12",
    updatedAt: "2024-03-12"
  },
  {
    id: "5",
    title: "Sapa - Vẻ đẹp Tây Bắc",
    content: "Sapa nổi tiếng với những ruộng bậc thang đẹp mê hồn, những ngôi làng của đồng bào dân tộc thiểu số và đỉnh Fansipan hùng vĩ. Du khách có thể trekking qua những cung đường đẹp, tham quan các làng bản và tìm hiểu về văn hóa của người dân địa phương.\n\nNằm ở độ cao 1.600m so với mực nước biển, Sapa có khí hậu ôn đới độc đáo với bốn mùa trong một ngày: sáng như mùa xuân, trưa như mùa hè, chiều như mùa thu và đêm như mùa đông.\n\nĐiểm tham quan hấp dẫn:\n- Đỉnh Fansipan\n- Ruộng bậc thang Mường Hoa\n- Bản Cát Cát\n- Thác Bạc\n- Cổng trời\n- Nhà thờ đá Sapa\n\nTrải nghiệm văn hóa:\n- Homestay với người dân tộc\n- Học làm thổ cẩm\n- Tham gia chợ phiên\n- Thưởng thức ẩm thực địa phương\n\nThời điểm đẹp nhất để thăm Sapa là từ tháng 9 đến tháng 11, khi ruộng bậc thang vào mùa lúa chín, hoặc từ tháng 3 đến tháng 5 khi thời tiết ấm áp và hoa đào nở rộ.",
    image: "/images/Home/Place/SAPA.jpg",
    createdAt: "2024-03-11",
    updatedAt: "2024-03-11"
  },
  {
    id: "6",
    title: "Phú Quốc - Đảo ngọc Việt Nam",
    content: "Phú Quốc là hòn đảo lớn nhất Việt Nam, nổi tiếng với những bãi biển hoang sơ, rừng nguyên sinh và nước mắm truyền thống. Du khách có thể tham quan các điểm đến nổi tiếng như Bãi Sao, Bãi Khem, tham gia tour câu mực đêm và thưởng thức hải sản tươi ngon.\n\nPhú Quốc có diện tích 589,23 km², là đảo lớn nhất Việt Nam. Đảo nổi tiếng với 150km bờ biển với nhiều bãi tắm đẹp, nước trong xanh và cát trắng mịn.\n\nĐiểm tham quan nổi bật:\n- Bãi Sao\n- Bãi Dài\n- Vinpearl Land\n- Vườn tiêu\n- Nhà thùng nước mắm\n- Chợ đêm Phú Quốc\n\nHoạt động thú vị:\n- Lặn ngắm san hô\n- Câu mực đêm\n- Tham quan đảo hoang\n- Khám phá Vườn quốc gia\n- Thưởng thức hải sản\n\nThời điểm lý tưởng để du lịch Phú Quốc là từ tháng 11 đến tháng 3 năm sau, khi thời tiết khô ráo và biển lặng, rất thích hợp cho các hoạt động tắm biển và khám phá đảo.",
    image: "/images/Home/Place/PHUQUOC.jpg",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10"
  }
];

const BlogDetailPage = () => {
    const { id } = useParams();
    const blog = sampleBlogs.find(blog => blog.id === id);

    if (!blog) {
        return (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="min-h-screen flex items-center justify-center bg-gray-50"
            >
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                    <p className="text-gray-600 mb-4">Không tìm thấy bài viết</p>
                    <Link href="/blogs" className="text-teal-500 hover:text-teal-600 transition-colors">
                        ← Quay lại trang Blogs
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 py-12"
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Hero Section */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8"
                >
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                            <p className="flex items-center">
                                <span className="mr-2">📅</span>
                                {new Date(blog.createdAt).toLocaleDateString('vi-VN')}
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">🔄</span>
                                {new Date(blog.updatedAt).toLocaleDateString('vi-VN')}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full mx-auto"
                >
                    <article className="bg-white rounded-4xl shadow-lg p-6 md:p-8">
                        <div className="prose prose-lg max-w-none">
                            {blog.content.split('\n\n').map((paragraph, index) => {
                                if (paragraph.includes('- ')) {
                                    // Render list items
                                    const items = paragraph.split('\n');
                                    return (
                                        <motion.ul 
                                            key={index} 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="list-none pl-0 space-y-2 my-4"
                                        >
                                            {items.map((item, itemIndex) => (
                                                <motion.li 
                                                    key={itemIndex}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                                                    className="flex items-center text-gray-700 mb-2"
                                                >
                                                    <span className="text-teal-500 mr-2">•</span>
                                                    {item.replace('- ', '')}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    );
                                }
                                return (
                                    <motion.p 
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="text-gray-700 mb-4"
                                    >
                                        {paragraph}
                                    </motion.p>
                                );
                            })}
                        </div>
                    </article>

                    {/* Navigation */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-8 flex justify-between items-center"
                    >
                        <Link 
                            href="/blogs" 
                            className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium transition-colors"
                        >
                            ← Quay lại trang Blogs
                        </Link>
                        
                        <div className="flex gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                            >
                                Chia sẻ
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition-colors"
                            >
                                Lưu bài viết
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BlogDetailPage;