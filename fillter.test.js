const fillter=require('./fillter');

describe('fillter function', () => {
    test('fillter function exist',()=>{
        expect(fillter).toBeDefined();
    });
    test('should return an emptty array',()=>{
        const testArray=[];
        const filterFn = (x) => x % 2 === 0;
        expect(fillter(testArray,filterFn)).toEqual([]);
    });
    test('should return an array of elements that pass the filter function',()=>{
        const testArray=[1,2,3,4,5];
        const filterFn = (x) => x % 2 === 0;
        expect(fillter(testArray,filterFn)).toEqual([2,4]);
    });

    test('test fauiler senario ',()=>{
        const testArray=[1,2,3,4,5];
        const filterFn = (x) => x % 2 === 0;
        expect(fillter(testArray,filterFn)).toEqual([1,2,4]);
    });
    test('test of all of the list item not included in the fillter list',()=>{
        const testArray=[1, 3, 5, 7, 9];
        const filterFn = (x) => x % 2 === 0;
        expect(fillter(testArray,filterFn)).toEqual([]);
    });
    test('Test a list with a mix of types',()=>{
        const testArray=[1, '2', 3, '4', 9];
        const filterFn = (x) => typeof(x)=='number';
        expect(fillter(testArray,filterFn)).toEqual([1,3,9]);
    });
});

