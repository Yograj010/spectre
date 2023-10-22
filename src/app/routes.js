function apiRoutes(app){
    app.use('/',()=>{
        console.log("--hello--")
    })
}

module.exports = apiRoutes;