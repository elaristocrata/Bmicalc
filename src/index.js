const Handler = require('./api/Handler').Handler;

const BmCalcService = require('./service/BmCalcService').BmCalcService;
const handler = new Handler(new BmCalcService());

exports.performBmCalculation = handler.handlerCalculation;
