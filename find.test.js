const find=require('./find');

describe('find function', () => {
    test('find function exist',()=>{
        expect(find).toBeDefined();
    });
    test('test if passed a empty array should return undefined',()=>{
        const testArray=[];
        const findFn = (x) => x > 10;
        expect(find(testArray,findFn)).toBeUndefined();
    });
    test('should return a first found item',()=>{
        const testArray=[10,20,30,94,500];
        const findFn = (x) => x > 50;
        expect(find(testArray,findFn)).toEqual(94);
    });

    test('test fauiler senario',()=>{
        const testArray=[10,20,30,94,500];
        const findFn = (x) => x > 50;
        expect(find(testArray,findFn)).toEqual(500);
    });
    test('test if item not found in list',()=>{
        const testArray=[1, 3, 5, 7, 9];
        const findFn = (x) => x > 10 ;
        expect(find(testArray,findFn)).toBeUndefined();
    });
    test('Test a list with a mix of types',()=>{
        const testArray=[1, '2', 2, 4, 9];
        const findFn = (x) => x===2;
        expect(find(testArray,findFn)).toEqual(2);
    });
});

