"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Thêm interface cho Blog
interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

// Dữ liệu mẫu
const sampleBlogs: Blog[] = [
  {
    id: "1",
    title: "Khám phá vẻ đẹp Hạ Long",
    content: "Vịnh Hạ Long là một di sản thiên nhiên thế giới được UNESCO công nhận, nổi tiếng với hàng nghìn hòn đảo đá vôi hùng vĩ và những hang động kỳ bí. Du khách có thể tham gia tour du lịch bằng thuyền, khám phá hang động, tắm biển và thưởng thức hải sản tươi ngon.",
    image: "/images/Home/Place/HALONG.jpg",
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15"
  },
  {
    id: "2",
    title: "Đà Lạt - Thành phố ngàn hoa",
    content: "Đà Lạt nổi tiếng với khí hậu mát mẻ quanh năm, những đồi thông bạt ngàn và vườn hoa rực rỡ. Thành phố này là điểm đến lý tưởng cho những ai muốn trốn cái nóng oi ả của mùa hè, thưởng thức cà phê và ngắm nhìn những công trình kiến trúc Pháp cổ kính.",
    image: "/images/Home/Place/DALAT.jpg",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14"
  },
  {
    id: "3",
    title: "Nha Trang - Thiên đường biển đảo",
    content: "Nha Trang là một trong những điểm đến biển đẹp nhất Việt Nam, với bãi biển dài, nước trong xanh và những hòn đảo hoang sơ. Du khách có thể lặn biển ngắm san hô, tham gia các hoạt động thể thao dưới nước và thưởng thức ẩm thực biển đặc trưng.",
    image: "/images/Home/Place/NHATRANG.jpg",
    createdAt: "2024-03-13",
    updatedAt: "2024-03-13"
  },
  {
    id: "4",
    title: "Hội An - Phố cổ đẹp nhất Việt Nam",
    content: "Hội An là một di sản văn hóa thế giới với kiến trúc cổ kính độc đáo, những ngôi nhà gỗ truyền thống và chiếc cầu Nhật Bản nổi tiếng. Vào mỗi đêm rằm, phố cổ được thắp sáng bởi hàng nghìn chiếc đèn lồng, tạo nên không gian lãng mạn và huyền ảo.",
    image: "/images/Home/Place/HOIAN.jpg",
    createdAt: "2024-03-12",
    updatedAt: "2024-03-12"
  },
  {
    id: "5",
    title: "Sapa - Vẻ đẹp Tây Bắc",
    content: "Sapa nổi tiếng với những ruộng bậc thang đẹp mê hồn, những ngôi làng của đồng bào dân tộc thiểu số và đỉnh Fansipan hùng vĩ. Du khách có thể trekking qua những cung đường đẹp, tham quan các làng bản và tìm hiểu về văn hóa của người dân địa phương.",
    image: "/images/Home/Place/SAPA.jpg",
    createdAt: "2024-03-11",
    updatedAt: "2024-03-11"
  },
  {
    id: "6",
    title: "Phú Quốc - Đảo ngọc Việt Nam",
    content: "Phú Quốc là hòn đảo lớn nhất Việt Nam, nổi tiếng với những bãi biển hoang sơ, rừng nguyên sinh và nước mắm truyền thống. Du khách có thể tham quan các điểm đến nổi tiếng như Bãi Sao, Bãi Khem, tham gia tour câu mực đêm và thưởng thức hải sản tươi ngon.",
    image: "/images/Home/Place/PHUQUOC.jpg",
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10"
  }
];

const BlogsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(sampleBlogs.length / itemsPerPage);
    const currentBlogs = sampleBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const renderBlogs = () => {
        return currentBlogs.map((blog: Blog, index: number) => (
            <div 
                key={blog.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="relative h-[250px] overflow-hidden">
                    <Image 
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                        className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{blog.title}</h2>
                </div>
                <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                    <Link 
                        href={`/blogs/${blog.id}`} 
                        className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium group"
                    >
                        Xem thêm 
                        <span className="ml-2 transform transition-transform group-hover:translate-x-2">→</span>
                    </Link>
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
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
            </div>
        ));
    }

    const renderPagination = () => {
        return (
            <div className="flex gap-2 mt-12 justify-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${
                            currentPage === index + 1
                                ? 'bg-teal-500 text-white shadow-lg scale-110'
                                : 'bg-gray-100 hover:bg-gray-200 hover:scale-105'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-teal-400">
                        Khám Phá Blog Du Lịch
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Khám phá những bài viết mới nhất về du lịch, chia sẻ kinh nghiệm và những điểm đến tuyệt vời
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderBlogs()}
                </div>
                <div className="mt-12">
                    {renderPagination()}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
