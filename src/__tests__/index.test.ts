import { isString, isNumber, isBoolean, isFunction, isArray,isDate,isObject ,isRegExp, isFileName} from '../index';

describe('valid', () => {

  test('should match a valid String', () => {
    expect(isString('str')).toBeTruthy();
    expect(isString(0)).toBeFalsy();
  });

  test('should match a valid Number', () => {
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber('0')).toBeFalsy();
  });

  test('should match a valid Boolean', () => {
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean('false')).toBeFalsy();
  });

  test('should match a valid Function', () => {
    expect(isFunction(() => '')).toBeTruthy();
    expect(isFunction('() => ""')).toBeFalsy();
  });

  test('should match a valid Array', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
    expect(isArray('str')).toBeFalsy();
  });

  test('should match a valid Date', () => {
    expect(isDate(new Date())).toBeTruthy();
    expect(isDate('str')).toBeFalsy();
  });

  test('should match a valid Object', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject([])).toBeFalsy();
  });

  test('should match a valid RegExp', () => {
    expect(isRegExp(/^[A-Fa-f0-9]+$/)).toBeTruthy();
    expect(isRegExp([])).toBeFalsy();
  });

  test('should match a valid File Name', () => {
    expect(isFileName('abc')).toBeTruthy();
  });


});
