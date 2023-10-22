let settings = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 5000,

    globalErrMsg: "Something went wrong, please try again later.",
}

module.exports = settings