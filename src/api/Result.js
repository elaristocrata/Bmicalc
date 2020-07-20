const headers = {'Content-type': 'application/json'}
class Ok_200 {
    constructor(message) {
        this.statusCode = 200;
        this.headers = headers;
        this.body = JSON.stringify({"result": message});
        this.isBase64Encoded = false;
    }
}

class BadRequest_400 {
    constructor(message) {
        this.statusCode = 400;
        this.headers = headers;
        this.body = JSON.stringify({"error": message});
        this.isBase64Encoded = false;
    }
}

class InternalServerError_500 {
    constructor(g) {
        this.statusCode = 500;
        this.headers = headers;
        this.body = JSON.stringify({"result": g.message});
        this.isBase64Encoded = false;
    }
}

exports.Ok_200 = Ok_200;
exports.BadRequest_400 = BadRequest_400;
exports.InternalServerError_500 = InternalServerError_500;
