import axiosInstance from '@/config/axiosInstance';

interface Booking {
  roomId: string;
  userId: string;
  checkInDate: string;
  checkOutDate: string;
}
export const getHotels = async () => {
  const response = await axiosInstance.get('/hotels');
  return response.data;
};

export const getHotelById = async (id: string) => {
  const response = await axiosInstance.get(`/hotels/${id}`);
  return response.data;
};

export const getRoomsByHotelId = async (hotelId: string) => {
  const response = await axiosInstance.get(`/hotels/${hotelId}/rooms`);
  return response.data;
};

export const getRoomById = async (roomId: string) => {
  const response = await axiosInstance.get(`/rooms/${roomId}`);
  return response.data;
};

export const getBookingByRoomId = async (roomId: string) => {
  const response = await axiosInstance.get(`/rooms/${roomId}/bookings`);
  return response.data;
};

export const getBookingById = async (bookingId: string) => {
  const response = await axiosInstance.get(`/bookings/${bookingId}`);
  return response.data;
};

export const getBookingByUserId = async (userId: string) => {
  const response = await axiosInstance.get(`/bookings/user/${userId}`);
  return response.data;
};

export const createBooking = async (booking: Booking) => {
  const response = await axiosInstance.post(`/bookings`, booking);
  return response.data;
};

export const updateBooking = async (bookingId: string, booking: Booking) => {
  const response = await axiosInstance.put(`/bookings/${bookingId}`, booking);
  return response.data;
};

export const deleteBooking = async (bookingId: string) => {
  const response = await axiosInstance.delete(`/bookings/${bookingId}`);
  return response.data;
};



























