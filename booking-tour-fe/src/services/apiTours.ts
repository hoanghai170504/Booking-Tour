import axiosInstance from "@/config/axiosInstance";

interface Tour {
  name: string;
  location: string;
  price: number;
  duration: number;
  date: string;
}

export const getTours = async () => {
  const response = await axiosInstance.get('/tours');
  return response.data;
};

export const getTourById = async (id: string) => {
  const response = await axiosInstance.get(`/tours/${id}`);
  return response.data;
};

export const getTourByLocation = async (location: string) => {
  const response = await axiosInstance.get(`/tours/location/${location}`);
  return response.data;
};  

export const getTourByPrice = async (price: number) => {
  const response = await axiosInstance.get(`/tours/price/${price}`);
  return response.data;
};  

export const getTourByDuration = async (duration: number) => {
  const response = await axiosInstance.get(`/tours/duration/${duration}`);
  return response.data;
};  

export const getTourByDate = async (date: string) => {
  const response = await axiosInstance.get(`/tours/date/${date}`);
  return response.data;
};  

export const createTour = async (tour: Tour) => {
  const response = await axiosInstance.post(`/tours`, tour);
  return response.data;
};  

export const updateTour = async (id: string, tour: Tour) => {
  const response = await axiosInstance.put(`/tours/${id}`, tour);
  return response.data;
};  

export const deleteTour = async (id: string) => {
  const response = await axiosInstance.delete(`/tours/${id}`);
  return response.data;
};      









