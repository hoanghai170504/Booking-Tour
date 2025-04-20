import axiosInstance from "@/config/axiosInstance";

interface Blog {
    title: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}
export const getBlogs = async () => {
    const response = await axiosInstance.get("/blogs");
    return response.data;
}

export const getBlogById = async (id: string) => {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data;
}

export const createBlog = async (blog: Blog) => {
    const response = await axiosInstance.post("/blogs", blog);
    return response.data;
}

export const updateBlog = async (id: string, blog: Blog) => {   
    const response = await axiosInstance.put(`/blogs/${id}`, blog);
    return response.data;
}

export const deleteBlog = async (id: string) => {
    const response = await axiosInstance.delete(`/blogs/${id}`);
    return response.data;
}