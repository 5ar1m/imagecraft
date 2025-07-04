const logger = require('../utils/logger');
const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.message}`, err);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Internal Server Error'
    });
};

module.exports = errorHandler;