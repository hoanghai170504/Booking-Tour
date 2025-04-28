import db from "../../models";

// Lấy tất cả blog
export const getAllBlogsService = () =>
    new Promise(async (resolve, reject) => {
        try {
            const blogs = await db.Blog.findAll({ raw: true });
            resolve({
                err: 0,
                message: "Lấy danh sách blog thành công",
                blogs,
            });
        } catch (error) {
            reject(error);
        }
    });

// Lấy blog theo id
export const getBlogByIdService = (blog_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const blog = await db.Blog.findByPk(blog_id, { raw: true });
            if (!blog) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy blog",
                });
            }
            resolve({
                err: 0,
                message: "Lấy blog thành công",
                blog,
            });
        } catch (error) {
            reject(error);
        }
    });

// Tạo blog mới
export const createBlogService = ({ image, createdate, title, description, active }) =>
    new Promise(async (resolve, reject) => {
        try {
            const newBlog = await db.Blog.create({
                image,
                createdate,
                title,
                description,
                active,
            });
            resolve({
                err: 0,
                message: "Tạo blog thành công",
                blog: newBlog,
            });
        } catch (error) {
            reject(error);
        }
    });

// Cập nhật blog
export const updateBlogService = (blog_id, { image, createdate, title, description, active }) =>
    new Promise(async (resolve, reject) => {
        try {
            const blog = await db.Blog.findByPk(blog_id);
            if (!blog) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy blog",
                });
            }
            await blog.update({ image, createdate, title, description, active });
            resolve({
                err: 0,
                message: "Cập nhật blog thành công",
                blog,
            });
        } catch (error) {
            reject(error);
        }
    });

// Xóa blog
export const deleteBlogService = (blog_id) =>
    new Promise(async (resolve, reject) => {
        try {
            const blog = await db.Blog.findByPk(blog_id);
            if (!blog) {
                return resolve({
                    err: 1,
                    message: "Không tìm thấy blog",
                });
            }
            await blog.destroy();
            resolve({
                err: 0,
                message: "Xóa blog thành công",
            });
        } catch (error) {
            reject(error);
        }
    });
