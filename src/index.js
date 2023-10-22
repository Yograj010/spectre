const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const config = require("./helpers/config")
const errorHandler = require("./helpers/errorHandler")

console.log(path.join(__dirname,"../public/assets/templates/index.html"))
const staticPath = path.join(__dirname,"../public/assets/templates")

//hosting_localhost_public_folder
app.use(express.static(staticPath));

// parse application/json
app.use(bodyParser.json())
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorHandler);
// require('./app/routes')(app)

//function to normalising server's port
function normalizePort(val){
    const port= parseInt(val,10);

    if(isNaN(port)){
        return false;
    }

    if(port >= 0){
        return port;
    }
    
    return false;

}

//declaring server's host & port
const HOST = config.host;
const PORT = normalizePort(config.port)

//creating server using express
app.listen(PORT, HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})
