exports.sucess = function(req, res, message, status){
    res.status( status || 200 ).send({
        body: message,
        error: ''
    });
}

exports.error = function(req, res, message, status){
    res.status( status || 500 ).send({
        error: message,
        body: ''
    });
}
