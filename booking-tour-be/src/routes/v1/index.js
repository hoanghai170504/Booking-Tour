import { notFound } from "../../middlewares/handle_error.js";
import swaggerUi from 'swagger-ui-express';

function initWebRoutes(app) {
    app.use('/api/v1/auth', require('./auth.route.js')
        // #swagger.tags = ['Auth']
    );

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('../../config/swagger-output.json')));
    // Import Swagger UI
    app.use(notFound);
}

export default initWebRoutes;