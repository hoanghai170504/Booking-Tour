import express from 'express';
const router = express.Router();
import * as controller from '../../controllers/index.js';

router.get('/', controller.getAllBlogs
    /* 
    #swagger.tags = ['Blogs']
    #swagger.summary = 'Get all blogs'
    #swagger.description = 'Get all blogs'
    */
);

router.get('/:id', controller.getBlogById
    /* 
    #swagger.tags = ['Blogs']
    #swagger.summary = 'Get blog by id'
    #swagger.description = 'Get blog by id'
    #swagger.parameters['id'] = { description: 'ID của blog', type: 'string', required: true }
    */
);

router.post('/', controller.createBlog
    /* 
    #swagger.tags = ['Blogs']
    #swagger.summary = 'Create blog'
    #swagger.description = 'Create blog'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        image: { type: 'string', example: 'https://example.com/image.jpg' },
                        createdate: { type: 'string', format: 'date-time', example: '2024-05-01T12:00:00Z' },
                        title: { type: 'string', example: 'Tiêu đề blog' },
                        description: { type: 'string', example: 'Nội dung blog...' },
                        active: { type: 'boolean', example: true }
                    },
                    required: ['image', 'title', 'description']
                }
            }
        }
    }
    */
);

router.put('/:id', controller.updateBlog
    /* 
    #swagger.tags = ['Blogs']
    #swagger.summary = 'Update blog'
    #swagger.description = 'Update blog'
    #swagger.parameters['id'] = { description: 'ID của blog', type: 'string', required: true }
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        image: { type: 'string', example: 'https://example.com/image.jpg' },
                        createdate: { type: 'string', format: 'date-time', example: '2024-05-01T12:00:00Z' },
                        title: { type: 'string', example: 'Tiêu đề blog' },
                        description: { type: 'string', example: 'Nội dung blog...' },
                        active: { type: 'boolean', example: true }
                    }
                }
            }
        }
    }
    */
);

router.delete('/:id', controller.deleteBlog
    /* 
    #swagger.tags = ['Blogs']
    #swagger.summary = 'Delete blog'
    #swagger.description = 'Delete blog'
    #swagger.parameters['id'] = { description: 'ID của blog', type: 'string', required: true }
    */
);

module.exports = router;