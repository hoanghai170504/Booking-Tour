import * as services from '../../services/index.js';
import Joi from 'joi';
import { badRequest, internalServerError, ok, created, notFound } from '../../middlewares/handle_error.js';

// Lấy tất cả khách sạn
export const getAllHotels = async (req, res) => {
    try {
        const response = await services.getAllHotelsService();
        return ok(res, response);
    } catch (err) {
        return internalServerError(res, err);
    }
};

// Lấy khách sạn theo id
export const getHotelById = async (req, res) => {
    try {
        const hotel = await services.getHotelByIdService(req.params.id);
        if (!hotel) return badRequest(res, hotel.message);
        return ok(res, hotel);
    } catch (err) {
        return internalServerError(res, err);
    }
};

// Tạo khách sạn mới
export const createHotel = async (req, res) => {
    try {
        // Validate input
        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
            image: Joi.string(),
            location: Joi.string(),
            status: Joi.string().valid('active', 'inactive')
        });

        const { error } = schema.validate(req.body);
        if (error) return badRequest(res, error.details[0].message);

        const response = await services.createHotelService(req.body);
        return created(res, response);
    } catch (err) {
        return internalServerError(res, err);
    }
};

// Cập nhật khách sạn
export const updateHotel = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return badRequest(res, "Missing hotel ID");
        }

        // Validate input data
        const schema = Joi.object({
            name: Joi.string(),
            description: Joi.string(),
            price: Joi.number(),
            image: Joi.string(),
            location: Joi.string(),
            status: Joi.string().valid('active', 'inactive')
        }).min(1); // Ít nhất phải có 1 trường được cập nhật

        const { error } = schema.validate(req.body);
        if (error) {
            return badRequest(res, error.details[0].message);
        }

        const response = await services.updateHotelService(id, req.body);
        
        if (response.err !== 0) {
            return notFound(res, response.message);
        }

        return ok(res, response);
    } catch (err) {
        return internalServerError(res, err);
    }
};  

// Xóa khách sạn
export const deleteHotel = async (req, res) => {
    try {
        const hotel = await services.deleteHotelService(req.params.id);
        if (!hotel) return badRequest(res, hotel.message);
        return ok(res, hotel);
    } catch (err) {
        return internalServerError(res, err);
    }
};

