const app = require('./app');
const logger = require('./utils/logger');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.info(`server started at port ${port}`)
});