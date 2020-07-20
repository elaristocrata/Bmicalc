class BmCalcService {
    constructor() {
        this.performBmCalculator = (w,h) => {
            if (h == 0){
                throw Error('El peso debe ser mayor a 0')
            }
            let weight = parseFloat(w,10);
            let height = parseFloat(h,10);
            return (weight / height / height *10000).toFixed(2);
        }
    }
}

exports.BmCalcService = BmCalcService;
