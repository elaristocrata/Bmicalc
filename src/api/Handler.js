const Result = require('./Result')
const logger = require('../logger/logger').logger
class Handler {
    constructor(BmCalcService) {
        this.handlerCalculation = async (event, context, callback) => {
            logger.info('handle calculation' + JSON.stringify(event));
            try {
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.height;
                if (isNaN(weight) || isNaN(height)) {
                    // http 400
                    return new Result.BadRequest_400('El peso o la altura no corresponden a un número')
                }
                let bmResult = await this.bmCalcService.performBmCalculator(weight, height);
                // return 200
                return  new Result.Ok_200(bmResult);
            }catch (g) {
                // return 500 http
                logger.error(`Error: ${e}`);
                return new Result.InternalServerError_500(g);
            }
        };
        this.bmCalcService = BmCalcService;
    }
}
exports.Handler = Handler;
