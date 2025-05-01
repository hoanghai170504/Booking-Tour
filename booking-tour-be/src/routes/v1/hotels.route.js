import express from 'express';
const router = express.Router();
import * as controller from '../../controllers/index.js';

router.get('/', controller.getAllHotels
    /* 
    #swagger.tags = ['Hotels']
    #swagger.summary = 'Get all hotels'
    #swagger.description = 'Return a list of all hotels in the system.'
    */
);
router.get('/:id', controller.getHotelById
    /* 
    #swagger.tags = ['Hotels']
    #swagger.summary = 'Get hotel by ID'
    #swagger.description = 'Return hotel details by ID'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Hotel ID',
        required: true,
        type: 'string'
    }
    */  
);
router.post('/', controller.createHotel
    /* 
    #swagger.tags = ['Hotels']
    #swagger.summary = 'Create hotel'
    #swagger.description = 'Create hotel'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'Hotel Name' },
                        description: { type: 'string', example: 'Hotel Description' },
                        price: { type: 'number', example: 100 },
                        image: { type: 'string', example: 'Hotel Image' },
                        location: { type: 'string', example: 'Hotel Location' },
                        status: { type: 'string', enum: ['active', 'inactive'], example: 'active' }
                    },
                    required: ['name', 'description', 'price', 'location', 'status']
                }
            }
        }
    }
    */
);
router.put('/:id', controller.updateHotel
    /* 
    #swagger.tags = ['Hotels']
    #swagger.summary = 'Update hotel'
    #swagger.description = 'Update hotel'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Hotel ID',
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
                        name: { type: 'string', example: 'Updated Hotel Name' },
                        description: { type: 'string', example: 'Updated Hotel Description' },
                        price: { type: 'number', example: 200 },
                        image: { type: 'string', example: 'Updated Hotel Image' },
                        location: { type: 'string', example: 'Updated Hotel Location' },
                        status: { type: 'string', enum: ['active', 'inactive'], example: 'active' }
                    },
                }
            }
        }
    }
    */
);
router.delete('/:id', controller.deleteHotel
    /* 
    #swagger.tags = ['Hotels']
    #swagger.summary = 'Delete hotel'
    #swagger.description = 'Delete hotel'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Hotel ID',
        required: true,
        type: 'string'
    }
    */
);

module.exports = router;