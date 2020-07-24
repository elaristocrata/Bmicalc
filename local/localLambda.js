const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const Handler = require('../src/api/Handler').Handler;
const BmCalculatorService = require('../src/service/BmCalcService').BmCalcService;
const handler = new Handler(new BmCalculatorService());

let app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:  false}));
app.route('/bmi')
    .get(function (req, res) {
        async function handlerCalculation() {
            let event = {};
            event.queryStringParameters = {
                "weight": req.query['weight'],
                "height": req.query['height']
            };
            const result = await handler.handlerCalculation(event);
            res.status(result.statusCode)
            .json(result.body);
        }
        handlerCalculation();
    });

var server = http.createServer(app);
const port = 4000;
server.listen(port);
console.log(`Servidor arriva en puerto ${port}`);
module.exports =app;


