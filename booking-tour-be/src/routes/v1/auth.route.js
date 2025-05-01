import express from 'express';
import * as controller from '../../controllers/index.js';

const router = express.Router();

router.post('/login', controller.loginController
    /* 
    #swagger.tags = ['User']
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            example: 'admin@gmail.com'
                        },
                        password: {
                            type: 'string',
                            example: '123456'
                        }
                    },
                    required: ['email', 'password']
                }
            }
        }
    }
    #swagger.description = 'Authenticate a user using their email and password.'
    #swagger.summary = 'Login to the system'
    */
);

router.post('/register', controller.registerController
    /* 
    #swagger.tags = ['User']
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            example: 'admin@gmail.com'
                        },
                        password: {
                            type: 'string',
                            example: '123456'
                        }
                    },
                    required: ['email', 'password']
                }
            }
        }
    }
    #swagger.description = 'Register a new user with email and password.'
    #swagger.summary = 'User registration'
    */
);

router.post('/forgot-password', controller.forgotPassword
    /* 
    #swagger.tags = ['Auth']
    #swagger.summary = 'Forgot password'
    #swagger.description = 'Send reset password link to email'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            example: 'user@example.com'
                        }
                    },
                    required: ['email']
                }
            }
        }
    }
    */
);

router.post('/reset-password', controller.resetPassword
    /* 
    #swagger.tags = ['Auth']
    #swagger.summary = 'Reset password'
    #swagger.description = 'Reset password with token'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        resetToken: {
                            type: 'string',
                            example: 'reset-token-here'
                        },
                        newPassword: {
                            type: 'string',
                            example: 'newpassword123'
                        },
                        confirmPassword: {
                            type: 'string',
                            example: 'newpassword123'
                        }
                    },
                    required: ['resetToken', 'newPassword', 'confirmPassword']
                }
            }
        }
    }
    */
);

module.exports = router;