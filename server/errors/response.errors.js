/**
 * The error response for a 405 status code
 */
const WrongHttpMethod = {
    msg: "The given HTTP Method is invalid",
    code: 405
}

/**
 * Response in a invalid request due a missing data 
 */
const InvalidRequest = {
    msg: `The request to the server can't be procesated
        due a missing data, please try again
    `,
    code: 400
};

/**
 * Error due the server get conflict resolving the request
 */
const ServerError = {
    msg: "The server can't proccess de request now :(",
    code: 500
};

module.exports = {
    WrongHttpMethod, 
    InvalidRequest,
    ServerError,
}