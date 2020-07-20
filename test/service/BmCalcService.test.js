const BmCalcService = require('../../src/service/BmCalcService').BmCalcService;

test('test para calcula un peso de 16.6 y altura de 99.1', () => {
    let weight = 16.6;
    let height = 99.1;

    let bmi = new BmCalcService().performBmCalculator(weight,height);
    expect(bmi).toEqual('16.90');
});

test('test para un peso es 0',() =>{
    let weight = 16.6;
    let height = 0;


    expect(() => {
        new BmCalcService().performBmCalculator(weight,height);
    }).toThrow();
})
