import * as services from '../../services/index.js';
import Joi from 'joi';
import { badRequest, internalServerError, ok } from '../../middlewares/handle_error';

export const getProfile = async (req, res) => {
    try {
        const user_id = req.user?.user_id;
        if (!user_id) {
            return badRequest(res, "User not authenticated");
        }

        const response = await services.getProfileService(user_id);
        return ok(res, response);
    } catch (error) {
        return internalServerError(res, error);
    }
};

export const updateProfile = async (req, res) => {
    try {
        const user_id = req.user?.user_id;
        if (!user_id) {
            return badRequest(res, "User not authenticated");
        }

        // Validate input data
        const schema = Joi.object({
            full_name: Joi.string(),
            phone: Joi.string(),
            address: Joi.string(),
            avatar: Joi.string(),
        }).min(1); // Ít nhất phải có 1 trường được cập nhật

        const { error } = schema.validate(req.body);
        if (error) {
            return badRequest(res, error.details[0].message);
        }

        const response = await services.updateProfileService(user_id, req.body);
        return ok(res, response);
    } catch (error) {
        return internalServerError(res, error);
    }
};