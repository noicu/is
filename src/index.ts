export * from './helpers/is'
import * as is from './helpers/is';

export const isA = is.isArray
export const isB = is.isBoolean
export const isD = is.isDate
export const isE = is.isElement
export const isF = is.isFunction
export const isN = is.isNumber
export const isO = is.isObject
export const isR = is.isRegExp
export const isS = is.isString
export const isNi = is.isNil

export const bT = is.isTrue
export const bF = is.isFalse

export const sJ = is.isJsonTest

export default {
  ...is,
  isA,
  isB,
  isD,
  isE,
  isF,
  isN,
  isO,
  isR,
  isS,
  isNi,
  bT,
  bF,
  sJ,
};

