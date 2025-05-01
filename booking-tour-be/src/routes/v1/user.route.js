import express from 'express';
const router = express.Router();
import * as controller from '../../controllers/index.js';
import { verify_token } from '../../middlewares/verifyToken.js';

router.get('/profile', verify_token, controller.getProfile
    /* 
    #swagger.tags = ['User']
    #swagger.summary = 'Get user profile'
    #swagger.description = 'Get current user profile information'
    #swagger.security = [{ "bearerAuth": [] }]
    */
);  

router.put('/profile', verify_token, controller.updateProfile
    /* 
    #swagger.tags = ['User']
    #swagger.summary = 'Update user profile'
    #swagger.description = 'Update current user profile information'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        full_name: { type: 'string', example: 'John Doe' },
                        phone: { type: 'string', example: '0123456789' },
                        address: { type: 'string', example: '123 Street' },
                        avatar: { type: 'string', example: 'https://example.com/avatar.jpg' }
                    }
                }
            }
        }
    }
    */
);

module.exports = router;