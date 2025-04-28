import * as services from '../../services/index.js';
import Joi from 'joi';
import { badRequest, internalServerError, ok, created } from '../../middlewares/handle_error.js';

// Lấy tất cả blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await services.getAllBlogsService();
    return ok(res, blogs);
  } catch (err) {
    return internalServerError(res, err);
  }
};

// Lấy 1 blog theo id
export const getBlogById = async (req, res) => {
  try {
    const blog = await services.getBlogByIdService(req.params.id);
    if (!blog) return badRequest(res, 'Blog not found');
    return ok(res, blog);
  } catch (err) {
    return internalServerError(res, err);
  }
};

// Tạo blog mới
export const createBlog = async (req, res) => {
  try {
    const { image, createdate, title, description, active } = req.body;
    const error = Joi.object({
      image: Joi.string().required(),
      createdate: Joi.date().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      active: Joi.boolean().required(),
    }).validate(req.body).error;
    if (error) return badRequest(res, error.message);
    const response = await services.createBlogService(req.body);
    if (response.err !== 0) return badRequest(res, response.message);
    return created(res, response);
  } catch (err) {
    return internalServerError(res, err);
  }
};

// Cập nhật blog
export const updateBlog = async (req, res) => {
  try {
    const { image, createdate, title, description, active } = req.body;
    const error = Joi.object({
      image: Joi.string().required(),
      createdate: Joi.date().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      active: Joi.boolean().required(),
    }).validate(req.body).error;
    if (error) return badRequest(res, error.message);
    const blog = await services.updateBlogService(req.params.id, { image, createdate, title, description, active });
    if (!blog) return badRequest(res, 'Blog not found');
    return ok(res, blog);
  } catch (err) {
    return internalServerError(res, err);
  }
};

// Xóa blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await services.deleteBlogService(req.params.id);
    if (!blog) return badRequest(res, 'Blog not found');
    return ok(res, blog);
  } catch (err) {
    return internalServerError(res, err);
  }
};