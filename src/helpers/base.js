class baseController {

    successReponse = async(res, data={})=>{
        let response = {
            statusCode: 200,
            success: true,
            error:null,
            result: data
        }
        return res.status(response.statusCode).json(response);
    }

    errorResponse = async(res, status ,error=null)=>{
        let response = {
            statusCode: status,
            success: false,
            error: error,
            result: {}
        }
        return res.status(status).json(response)
    }
}

module.exports = baseController