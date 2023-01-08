const reduce = require("./reduce");

describe("reduce function", () => {
  test("reduce function exist", () => {
    expect(reduce).toBeDefined();
  });
  test("test if passed a empty array should return zero", () => {
    const testArray = [];
    const reduceFn = (previous, current) => previous + current;
    const initialValue=0;
    expect(reduce(testArray, reduceFn,initialValue)).toBe(0);
  });

  test("if passed a multiple items in list should return value", () => {
    const testArray = [10, 20, 30, 94, 500];
    const reduceFn = (previous, current) => previous + current;
    const initialValue=0;
    expect(reduce(testArray, reduceFn,initialValue)).toBe(654);
  });

  test('test fauiler senario',()=>{
      const testArray=[10,20,30,94,500];
      const reduceFn = (previous, current) => previous + current;
      const initialValue=0;
      expect(reduce(testArray, reduceFn,initialValue)).toBe(754);
    });
  test('test with multiple function',()=>{
      const testArray=[1, 3, 5, 2, 4];
      const reduceFn = (previous, current) => previous * current;
      const initialValue=1;
      expect(reduce(testArray, reduceFn,initialValue)).toEqual(120);
  });
});
