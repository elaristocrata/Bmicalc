const Result = require('./Result')
class Handler {
    constructor(BmCalcService) {
        this.handlerCalculation = async (event, context, callback) => {
            try {
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.height;
                if (isNaN(weight) || isNaN(height)) {
                    // http 400
                    return new Result.BadRequest_400('El peso o la altura no corresponden a un número')
                }
                let bmResult = await thos.bmCalcService.performBmCalculator(weight, height);
                // return 200
                return  new Result.Ok_200(bmResult);
            }catch (g) {
                // return 500 http
                return new Result.InternalServerError_500(g);
            }
        };
        this.bmCalcService = bmCalcService;
    }
}
exports.Handler = Handler;
