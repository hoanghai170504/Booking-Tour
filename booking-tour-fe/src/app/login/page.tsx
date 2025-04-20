"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { loginAsync, registerAsync } from '@/redux/features/authSlice';
import { useRouter } from 'next/navigation';
import { RootState } from "@/redux/store";

export default function Auth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state: RootState) => state.auth);
  const [isLogin, setIsLogin] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Mảng các hình ảnh cho slide
  const images = [
    "/images/Login/login1.jpg",
    "/images/Login/login2.jpg", // Thay bằng ảnh thứ 2 thực tế
    "/images/Login/login3.jpg"  // Thay bằng ảnh thứ 3 thực tế
  ];
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  useEffect(() => {
    // Thiết lập interval để chuyển slide tự động
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Tăng thời gian để animation mượt hơn
    
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const result = await dispatch(loginAsync({
        email: formData.email,
        password: formData.password
      }));
      
      if (loginAsync.fulfilled.match(result)) {
        // Đăng nhập thành công
        router.push('/'); // hoặc trang chính sau đăng nhập
      }
    } else {
      const result = await dispatch(registerAsync({
        email: formData.email,
        password: formData.password
      }));
      
      if (registerAsync.fulfilled.match(result)) {
        // Đăng ký thành công
        router.push('/');
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Phần bên trái - Hình ảnh và thông tin */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
        {/* Hình ảnh nền tràn đầy */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images[activeIndex]}
            alt="Travel Illustration"
            fill
            objectFit="cover"
            className="transition-all duration-1500 ease-in-out transform scale-105 hover:scale-110"
            style={{ 
              animation: "pulse 5s infinite ease-in-out" 
            }}
          />
        </div>
        
        {/* Nội dung chữ nằm trong hình ảnh */}
        <div className="text-center relative z-10 w-full p-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-white mt-8 drop-shadow-lg animate-fadeIn transition-all duration-700">Khám Phá Việt Nam</h2>
          <p className="text-white text-xl mt-6 leading-relaxed drop-shadow-md max-w-md mx-auto animate-slideUp transition-all duration-1000">Đăng nhập để bắt đầu hành trình du lịch tuyệt vời của bạn với những ưu đãi độc quyền.</p>
          <div className="mt-10 flex justify-center space-x-4">
            {images.map((_, index) => (
              <span 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 bg-white rounded-full transition-all duration-700 cursor-pointer transform ${
                  activeIndex === index ? 'opacity-100 scale-125 shadow-lg' : 'opacity-50 hover:opacity-75 hover:scale-110'
                }`}
              ></span>
            ))}
          </div>
        </div>
        
        {/* Hiệu ứng trang trí nâng cao */}
        <div className="absolute top-0 left-0 w-full h-full z-5">
          <div className="absolute top-10 left-10 w-60 h-60 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob transition-all duration-3000"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 transition-all duration-3000"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 transition-all duration-3000"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-6000 transition-all duration-3000"></div>
        </div>
      </div>
      
      {/* Phần bên phải - Form đăng nhập/đăng ký */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Toggle Buttons */}
        <div className="flex">
          <button
            className={`w-1/2 py-4 text-lg font-semibold transition-all duration-500 ${
              isLogin
                ? "bg-teal-400 text-white shadow-md"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Đăng Nhập
          </button>
          <button
            className={`w-1/2 py-4 text-lg font-semibold transition-all duration-500 ${
              !isLogin
                ? "bg-teal-400 text-white shadow-md"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Đăng Ký
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <Link href="/">
            <Image src="/images/logovivu-removebg.png" alt="Logo" width={100} height={100} className="mx-auto mb-8" />
          </Link>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fadeIn">
            {isLogin ? "Chào mừng trở lại👋" : "Tạo tài khoản mới ✨"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto w-full">
            {!isLogin && (
              <div className="space-y-2 animate-slideUp">
                <label className="text-sm font-medium text-gray-700">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
            )}

            <div className="space-y-2 animate-slideUp" style={{ animationDelay: "100ms" }}>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                placeholder="example@email.com"
              />
            </div>

            <div className="space-y-2 animate-slideUp" style={{ animationDelay: "200ms" }}>
              <label className="text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <div className="space-y-2 animate-slideUp" style={{ animationDelay: "300ms" }}>
                <label className="text-sm font-medium text-gray-700">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between animate-slideUp" style={{ animationDelay: "300ms" }}>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-teal-400 focus:ring-teal-400 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-teal-500 hover:text-teal-600 transition-colors duration-300"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-400 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-500 transform hover:scale-[1.03] transition-all duration-500 shadow-lg hover:shadow-xl animate-pulse-slow"
            >
              {loading ? 'Đang xử lý...' : (isLogin ? 'Đăng Nhập' : 'Đăng Ký')}
            </button>
          </form>

          <div className="mt-8 max-w-md mx-auto w-full animate-fadeIn" style={{ animationDelay: "400ms" }}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Hoặc tiếp tục với
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:bg-gray-50 transform hover:scale-105">
                <Image
                  src="/images/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:bg-gray-50 transform hover:scale-105">
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hiệu ứng trang trí cho màn hình nhỏ */}
      <div className="md:hidden absolute bottom-0 left-0 w-full">
        <div className="absolute -bottom-8 left-10 w-40 h-40 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 right-10 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}