import Joi from 'joi';
import { badRequest, internalServerError, ok } from '../../middlewares/handle_error.js';
import * as services from '../../services/auth/index.js';

export const loginController = async (req, res) => {
    try {
        // Validate the request body
        const error = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        }).validate(req.body).error;
        if (error) return badRequest(res, error.message);

        // Call the service function
        const response = await services.loginService(req.body);

        // Return the response
        return ok(res, response);
    } catch (error) {
        internalServerError(res, error);
    }
};

export const registerController = async (req, res) => {
    try {
        // Validate the request body
        const error = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        }).validate(req.body).error;
        if (error) return badRequest(res, error.message);

        // Call the service function
        const response = await services.registerService(req.body);

        // Return the response
        return ok(res, response);
    } catch (error) {
        internalServerError(res, error);
    }
}