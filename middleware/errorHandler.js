const {constants} = require('../constants')

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch(statusCode){
        case 401:
            res.json({title: "Validation error", message: error.message, stackTrace: error.stack});
            break;
        case 402:
            res.json({title: "Unauthorized access", message: error.message, stackTrace: error.stack});
            break;
        case 403:
            res.json({title: "Forbidden content", message: error.message, stackTrace: error.stack});
            break;
        case 404:
            res.json({title: "Not Found", message: error.message, stackTrace: error.stack});
            break;
        case 500:
            res.json({title: "server error", message: error.message, stackTrace: error.stack});
            break;
        default:
            console.log(`all good ${statusCode}`)
            break;
    }
}

module.exports = errorHandler