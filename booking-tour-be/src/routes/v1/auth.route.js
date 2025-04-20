import express from 'express';
import * as controller from '../../controllers/index.js';

const router = express.Router();

router.post('/login', controller.loginController
    /* 
    #swagger.tags = ['Auth']
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
    #swagger.tags = ['Auth']
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

module.exports = router;