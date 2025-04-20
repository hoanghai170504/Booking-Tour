'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';  

// Định nghĩa các interface
interface Hotel {
  name: string;
  location: string;
  oldPrice: string;
  price: string;
  image: string;
  amenities: string[];
  description: string;
  address: string;
  rooms: Room[];
}

interface Room {
  id: string;
  name: string;
  size: string;
  capacity: string;
  view: string;
  price: string;
  image: string;
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`/api/hotels/${params.id}`);
        const data = await response.json();
        setHotel(data);
        setLoading(false);
      } catch (err) {
        setError(err as string);
        setLoading(false);
      }
    };

    fetchHotel();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  } 

  if (error || !hotel) {
    return <div>Error loading hotel details</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-teal-500">Trang chủ</Link>
            <span className="text-gray-500">/</span>
            <Link href="/hotels" className="text-gray-500 hover:text-teal-500">Tìm khách sạn</Link>
            <span className="text-gray-500">/</span>
            <span className="text-teal-500">{hotel.name}</span>
          </div>
        </div>
      </div>

      {/* Hotel Header */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-gray-500 flex items-center gap-2">
              <span>{hotel.location}</span>
              <Link href="#map" className="text-teal-500 hover:underline">Xem bản đồ và địa chỉ</Link>
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 line-through">{hotel.oldPrice}</p>
            <p className="text-3xl font-bold text-teal-600">{hotel.price}</p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 h-[500px]">
          <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
            <Image
              src={hotel.image}
              alt={`${hotel.name} main`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {[...Array(4)].map((_, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <Image
                src={hotel.image}
                alt={`${hotel.name} view ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hotel Features */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Đặc điểm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotel.amenities.map((amenity: string) => (
            <div key={amenity} className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {amenity}
            </div>
          ))}
        </div>
      </div>

      {/* Room Types */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Các loại phòng & giá</h2>
        <div className="space-y-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 128px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{room.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {room.capacity}
                    </span>
                    <span>{room.view}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-teal-600">{room.price}</p>
                <p className="text-sm text-gray-500">/đêm</p>
                <button className="mt-2 bg-teal-400 text-white px-6 py-2 rounded-full hover:bg-teal-500 transition-colors">
                  Đặt ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Giới thiệu</h2>
        <div className="prose max-w-none">
          <p>{hotel.description}</p>
        </div>
      </div>

      {/* Map */}
      <div id="map" className="container mx-auto px-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Bản đồ và địa chỉ</h2>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="mb-4">{hotel.address}</p>
          <div className="h-[400px] rounded-lg overflow-hidden bg-gray-200">
            {/* Add your map component here */}
          </div>
        </div>
      </div>
    </div>
  );  
}