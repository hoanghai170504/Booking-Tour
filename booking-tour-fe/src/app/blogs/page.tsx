"use client"
import axiosInstance from "@/config/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Thêm interface cho Blog
interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const BlogsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axiosInstance.get(`/blogs?page=${currentPage}`);
                setBlogs(response.data.blogs);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            } catch (err) {
                // Xử lý error đúng cách
                const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching blogs';
                setError(errorMessage);
                setLoading(false);
            }
        }
        fetchBlogs();
    }, [currentPage]);

    if (loading) {
        return (
            <div className="container mx-auto px-6 py-8">
                <div className="text-center">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-6 py-8">
                <div className="text-center text-red-500">
                    Error: {error}
                </div>
            </div>
        );
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const renderBlogs = () => {
        return blogs.map((blog: Blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-[200px]">
                    <Image 
                        src={blog.image || "/images/Home/Place/NHATRANG.jpg"}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                        className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-gray-600 mb-4">{blog.content}</p>
                    <Link 
                        href={`/blogs/${blog.id}`} 
                        className="text-teal-500 hover:text-teal-600 font-medium"
                    >
                        Xem thêm →
                    </Link>
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                        <p>Đăng: {new Date(blog.createdAt).toLocaleDateString('vi-VN')}</p>
                        <p>Cập nhật: {new Date(blog.updatedAt).toLocaleDateString('vi-VN')}</p>
                    </div>
                </div>
            </div>
        ));
    }

    const renderPagination = () => {
        return (
            <div className="flex gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-md ${
                            currentPage === index + 1
                                ? 'bg-teal-500 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className="py-8">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold mb-8">Blogs Du Lịch</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {renderBlogs()}
                </div>
                <div className="flex justify-center">
                    {renderPagination()}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
