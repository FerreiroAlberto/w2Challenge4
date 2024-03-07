import {
  arrayLength,
  arrayPush,
  arrayUnshift,
  arrayIndexOf,
  arrayIncludes,
  arrayMap,
  arrayFilter,
  arrayFind,
  arrayFindIndex,
  arrayJoin,
  arraySome,
  arrayEvery,
} from './arrays.js';

describe('arrayLength', () => {
  test('it should return 1 when parameter is []', () => {
    const x = [];
    const expected = 0;
    const result = arrayLength(x);
    expect(result).toBe(expected);
  });
  test('it should return 3 when parameter is [0,1,2]', () => {
    const x = [0, 1, 2];
    const expected = 3;
    const result = arrayLength(x);
    expect(result).toBe(expected);
  });
  test('it should return 2 when parameter is [undefined,undefined]', () => {
    const x = [undefined, undefined];
    const expected = 2;
    const result = arrayLength(x);
    expect(result).toBe(expected);
  });
});

describe('arrayPush', () => {
  test('it should return 3 when array is [1,2] and element is 3', () => {
    const x = [1, 2];
    const y = 3;
    const expected = 3;
    const result = arrayPush(x, y);
    expect(result).toBe(expected);
  });
  test('it should return 5 when array is [1,2] and element is 3,4,5', () => {
    const x = [1, 2];
    const y = 3;
    const z = 4;
    const a = 5;
    const expected = 5;
    const result = arrayPush(x, y, z, a);
    expect(result).toBe(expected);
  });
  test('it should return 2 when array is [1,2] and there is no element', () => {
    const x = [1, 2];
    const expected = 2;
    const result = arrayPush(x);
    expect(result).toBe(expected);
  });
  test('it should return 3 when array is [] and element is [1,2,3]', () => {
    const x = [];
    const y = 1;
    const z = 2;
    const a = 3;
    const expected = 3;
    const result = arrayPush(x, y, z, a);
    expect(result).toBe(expected);
  });
});

describe('arrayUnshift', () => {
  test('it should return 3 when array is [1,2] and element is 3', () => {
    const x = [1, 2];
    const y = 3;
    const expected = 3;
    const result = arrayUnshift(x, y);
    expect(result).toBe(expected);
  });
  test('it should return 2 when array is [] and element are 3, 2', () => {
    const x = [];
    const y = 3;
    const z = 2;
    const expected = 2;
    const result = arrayUnshift(x, y, z);
    expect(result).toBe(expected);
  });
  test('it should return 2 when array is [1,2] and there is no element', () => {
    const x = [1, 2];
    const expected = 2;
    const result = arrayUnshift(x);
    expect(result).toBe(expected);
  });
  test('it should return 5 when array is [1,2] and elements are 3, 4, 5', () => {
    const x = [1, 2];
    const y = 3;
    const z = 4;
    const a = 5;
    const expected = 5;
    const result = arrayUnshift(x, y, z, a);
    expect(result).toBe(expected);
  });
});

describe('arrayIndexOf', () => {
  test('it should return 3 when array is [1,2,3,4,5] and element is 4', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 4;
    const expected = 3;
    const result = arrayIndexOf(x, y);
    expect(result).toBe(expected);
  });
  test('it should return -1 when array is [1,2,3,4,5] and element is 6', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 6;
    const expected = -1;
    const result = arrayIndexOf(x, y);
    expect(result).toBe(expected);
  });
  test('it should return -1 when array is [1,2,3,4,5], element is 1 ans start is 1', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 1;
    const z = 1;
    const expected = -1;
    const result = arrayIndexOf(x, y, z);
    expect(result).toBe(expected);
  });
});

describe('arrayIncludes', () => {
  test('it should return true when array is [1,2,3,4,5], element is 4 and there is no start', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 4;
    const expected = true;
    const result = arrayIncludes(x, y);
    expect(result).toBe(expected);
  });
  test('it should return true when array is [1,2,3,4,5], element is 4 and start is -3', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 4;
    const z = -3;
    const expected = true;
    const result = arrayIncludes(x, y, z);
    expect(result).toBe(expected);
  });
  test('it should return false when array is [1,2,3,4,5], element is 4 and start is 8', () => {
    const x = [1, 2, 3, 4, 5];
    const y = 4;
    const z = 8;
    const expected = false;
    const result = arrayIncludes(x, y, z);
    expect(result).toBe(expected);
  });
});

describe('arrayMap', () => {
  test('it should return [2, 8, 18, 32] when array is [1, 4, 9, 16] and func is (x) => x * 2', () => {
    const x = [1, 4, 9, 16];
    const y = (x) => x * 2;
    const expected = [2, 8, 18, 32];
    const result = arrayMap(x, y);
    expect(result).toStrictEqual(expected);
  });
  test('it should return [] when array is [] and func is (x) => x * 2', () => {
    const x = [];
    const y = (x) => x * 2;
    const expected = [];
    const result = arrayMap(x, y);
    expect(result).toStrictEqual(expected);
  });
});

describe('arrayFilter', () => {
  test('it should return ["exuberant", "destruction", "present"] when array is ["spray", "elite", "exuberant", "destruction", "present"] and func is (word) => word.length > 6)', () => {
    const x = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    const y = (word) => word.length > 6;
    const expected = ['exuberant', 'destruction', 'present'];
    const result = arrayFilter(x, y);
    expect(result).toStrictEqual(expected);
  });
  test('it should return [6,7,9,11] when array is [1,3,5,6,7,9,11] and func is (x) => x > 5)', () => {
    const x = [1, 3, 5, 6, 7, 9, 11];
    const y = (x) => x > 5;
    const expected = [6, 7, 9, 11];
    const result = arrayFilter(x, y);
    expect(result).toStrictEqual(expected);
  });
});

describe('arrayFind', () => {
  test('it should return 12 when array is [5, 12, 8, 130, 44] and func is (element) => element > 10)', () => {
    const x = [5, 12, 8, 130, 44];
    const y = (element) => element > 10;
    const expected = 12;
    const result = arrayFind(x, y);
    expect(result).toStrictEqual(expected);
  });
  test('it should return undefined when array is [5, 12, 8, 30, 44] and func is (element) => element > 1000)', () => {
    const x = [5, 12, 8, 130, 44];
    const y = (element) => element > 1000;
    const expected = undefined;
    const result = arrayFind(x, y);
    expect(result).toStrictEqual(expected);
  });
});
describe('arrayFindIndex', () => {
  test('it should return 3 when array is [5, 12, 8, 130, 44] and func is (element) => element > 13)', () => {
    const x = [5, 12, 8, 130, 44];
    const y = (element) => element > 13;
    const expected = 3;
    const result = arrayFindIndex(x, y);
    expect(result).toStrictEqual(expected);
  });
  test('it should return 1 when array is [5, 12, 8, 130, 44] and func is (element) => element%2 = 0)', () => {
    const x = [5, 12, 8, 130, 44];
    const y = (element) => element % 2 === 0;
    const expected = 1;
    const result = arrayFindIndex(x, y);
    expect(result).toStrictEqual(expected);
  });
});
describe('arrayJoin', () => {
  test('it should return 3 when array is [5, 12, 8, 130, 44] and separator is /', () => {
    const x = [5, 12, 8, 130, 44];
    const y = '/';
    const expected = '5/12/8/130/44';
    const result = arrayJoin(x, y);
    expect(result).toStrictEqual(expected);
  });
  test('it should return 3 when array is [5, 12, 8, 130, 44] and separator is undefined', () => {
    const x = [5, 12, 8, 130, 44];
    const expected = '5,12,8,130,44';
    const result = arrayJoin(x);
    expect(result).toStrictEqual(expected);
  });
});
describe.only('arraySome', () => {
  test('it should return true when array is [1, 2, 3, 4, 5] and function is (element) => element % 2 === 0', () => {
    const x = [1, 2, 3, 4, 5];
    const y = (element) => element % 2 === 0;
    const expected = true;
    const result = arraySome(x, y);
    expect(result).toStrictEqual(expected);
  });
});
describe.only('arrayEvery', () => {
  test('it should return true when array is [1, 2, 3, 4, 5] and function is (currentValue) => currentValue < 40;', () => {
    const x = [1, 2, 3, 4, 5];
    const y = (currentValue) => currentValue < 40;
    const expected = true;
    const result = arrayEvery(x, y);
    expect(result).toStrictEqual(expected);
  });
});
