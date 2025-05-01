import Joi from 'joi';
import { badRequest, internalServerError, ok } from '../../middlewares/handle_error.js';
import * as services from '../../services/index.js';

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

export const forgotPassword = async (req, res) => {
    try {
        const { error } = Joi.object({
            email: Joi.string().email().required()
        }).validate(req.body);

        if (error) {
            return badRequest(res, error.details[0].message);
        }

        const response = await services.forgotPasswordService(req.body.email);
        return ok(res, response);
    } catch (error) {
        return internalServerError(res, error.message);
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { error } = Joi.object({
            resetToken: Joi.string().required(),
            newPassword: Joi.string().min(6).required(),
            confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required()
        }).validate(req.body);

        if (error) {
            return badRequest(res, error.details[0].message);
        }

        const response = await services.resetPasswordService(req.body);
        return ok(res, response);
    } catch (error) {
        return internalServerError(res, error.message);
    }
};