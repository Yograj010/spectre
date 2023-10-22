const baseController = require('./base');
const basectrl = new baseController();
const config = require('./config');

function errorHandler(err, req, res, next){
    let error = {
        message: config.globalErrMsg,
        errorDetails: err.stack,
    }
    
    return basectrl.errorResponse(res, 500, error);
}

module.exports = errorHandler