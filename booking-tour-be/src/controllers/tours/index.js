import * as services from '../../services/index.js';
import Joi from 'joi';
import { badRequest, internalServerError, ok, created, notFound } from '../../middlewares/handle_error.js';

// Lấy tất cả tour
export const getAllTours = async (req, res) => {
    try {
        const response = await services.getAllToursService();
        return ok(res, response);
    } catch (err) {
        return internalServerError(res, err.message);
    }
};

// Lấy tour theo id
export const getTourById = async (req, res) => {
    try {
        const tour = await services.getTourByIdService(req.params.id);
        if (!tour) return badRequest(res, tour.message);
        return ok(res, tour);
    } catch (err) {
        return internalServerError(res, err);
    }
};

// Tạo tour mới
export const createTour = async (req, res) => {
    try {
        // Validate input
        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
            duration: Joi.number().required(),
            image: Joi.string(),
            location: Joi.string(),
            departure: Joi.string(),
            status: Joi.string().valid('active', 'inactive')
        });

        const { error } = schema.validate(req.body);
        if (error) return badRequest(res, error.details[0].message);

        const response = await services.createTourService(req.body);
        return created(res, response);
    } catch (err) {
        return internalServerError(res, err.message);
    }
};

// Cập nhật tour
export const updateTour = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return badRequest(res, "Missing tour ID");
        }

        // Validate input data
        const schema = Joi.object({
            name: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            duration: Joi.number(),
            image: Joi.string(),
            location: Joi.string(),
            departure: Joi.string(),
            status: Joi.string().valid('active', 'inactive')
        }).min(1); // Ít nhất phải có 1 trường được cập nhật

        const { error } = schema.validate(req.body);
        if (error) {
            return badRequest(res, error.details[0].message);
        }

        const response = await services.updateTourService(id, req.body);
        
        if (response.err !== 0) {
            return notFound(res, response.message);
        }

        return ok(res, response);
    } catch (err) {
        return internalServerError(res, err.message);
    }
};  

// Xóa tour
export const deleteTour = async (req, res) => {
    try {
        const tour = await services.deleteTourService(req.params.id);
        if (!tour) return badRequest(res, tour.message);
        return ok(res, tour);
    } catch (err) {
        return internalServerError(res, err);
    }
};

