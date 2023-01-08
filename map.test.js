const map=require('./map');

describe('map function', () => {
    test('map function exist',()=>{
        expect(map).toBeDefined();
    });
    test('test if passed a empty array should return empty array',()=>{
        const testArray=[];
        const mapFn = (x) => Math.sqrt(x);
        expect(map(testArray,mapFn)).toEqual([]);
    });
    test('test if passed list of multiple number should return a mapped list',()=>{
        const testArray=[10,20,30,40,500];
        const mapFn = (x) => Math.pow(x,2);
        expect(map(testArray,mapFn)).toEqual([100,400,900,1600,250000]);
    });

    test('test fauiler senario',()=>{
        const testArray=[10,20,30,40,500];
        const mapFn = (x) => Math.pow(x,2);
        expect(map(testArray,mapFn)).toEqual([100,400,900,1600,25000]);
    });
    test('Test a list with a mix of types',()=>{
        const testArray=[10,'20',30,'40',500];
        const mapFn = (x) =>typeof(x)==='number'? Math.pow(x,2):x.toUpperCase();
        expect(map(testArray,mapFn)).toEqual([100,'20',900,'40',250000]);
    });
    test('Test a list with a elements are object',()=>{
        const testArray=[{x:10},{x:20},30,500];
        const mapFn = (element) =>typeof(element)==='object'? Math.pow(element.x,2):Math.pow(element,2);
        expect(map(testArray,mapFn)).toEqual([100,400,900,250000]);
    });
});
