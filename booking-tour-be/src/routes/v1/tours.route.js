import express from 'express';
const router = express.Router();
import * as controller from '../../controllers/index.js';

router.get('/', controller.getAllTours
    /* 
    #swagger.tags = ['Tours']
    #swagger.summary = 'Get all tours'
    #swagger.description = 'Return a list of all tours in the system.'
    */
);
router.get('/:id', controller.getTourById
    /* 
    #swagger.tags = ['Tours']
    #swagger.summary = 'Get tour by ID'
    #swagger.description = 'Return tour details by ID'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Tour ID',
        required: true,
        type: 'string'
    }
    */
);
router.post('/', controller.createTour
    /* 
    #swagger.tags = ['Tours']
    #swagger.summary = 'Create a new tour'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'Ha Long Bay Tour' },
                        description: { type: 'string', example: 'Amazing tour...' },
                        price: { type: 'number', example: 199.99 },
                        duration: { type: 'number', example: 3 },
                        image: { type: 'string', example: 'https://example.com/image.jpg' },
                        location: { type: 'string', example: 'Đà Nẵng' },
                        departure: { type: 'string', example: 'Hà Nội' },
                        status: { type: 'string', enum: ['active', 'inactive'], example: 'active' },
                        created_at: { type: 'string', example: '2024-01-01T00:00:00Z' },
                        updated_at: { type: 'string', example: '2024-01-01T00:00:00Z' }
                    },
                    required: ['name', 'description', 'price', 'duration', 'location', 'departure', 'status']
                }
            }
        }
    }
    */
);
router.put('/:id', controller.updateTour
    /* 
    #swagger.tags = ['Tours']
    #swagger.summary = 'Update tour by ID'
    #swagger.description = 'Update tour information by ID'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Tour ID',
        required: true,
        type: 'string'
    }
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'Updated Tour Name' },
                        description: { type: 'string', example: 'Updated description' },
                        price: { type: 'number', example: 299.99 },
                        duration: { type: 'number', example: 4 },
                        image: { type: 'string', example: 'https://example.com/new-image.jpg' },
                        location: { type: 'string', example: 'Updated Location' },
                        departure: { type: 'string', example: 'Updated Departure' },
                        status: { type: 'string', enum: ['active', 'inactive'], example: 'active' },
                        created_at: { type: 'string', example: '2024-01-01T00:00:00Z' },
                        updated_at: { type: 'string', example: '2024-01-01T00:00:00Z' }
                    },
                }
            }
        }
    }
    */
);
router.delete('/:id', controller.deleteTour
    /* 
    #swagger.tags = ['Tours']
    #swagger.summary = 'Delete tour'
    #swagger.description = 'Delete tour'
    #swagger.parameters['id'] = { description: 'ID của tour', type: 'string', required: true }
    */
);
module.exports = router;