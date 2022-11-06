import { IMG_FILE_TYPE } from "../common"

export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean'
}

export function isNumber(value: any): value is number {
  return typeof value === 'number'
}

export function isString(value: any): value is string {
  return typeof value === 'string'
}

export function isFunction(value: any): value is Function {
  return typeof value === 'function'
}

export function isObject(value: any): value is Object {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isArray(value: any): value is Array<any> {
  return Array.isArray(value)
}

export function isDate(value: any): value is Date {
  return value instanceof Date
}

export function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp
}

export function isElement(value: any): value is HTMLElement {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
}

export function isTrue(value: any): value is true {
  return isBoolean(value) && Boolean(Number(value)) === true;
}

export function isFalse(value: any): value is false {
  return isBoolean(value) && Boolean(Number(value)) === false;
}

export function isNil(value: any): value is null {
  return value === null
}

export function isJsonTest(string: any): string is JSON {
  if (isString(string)) {
    try {
      JSON.parse(string)
      return true
    }
    catch (_e) {
      return false
    }
  }
  return false
}

export function isUndefined(value: any): value is undefined {
  return value === undefined
}

export function isNumberString(value: any): value is number {
  return !isNaN(Number(value))
}

export function isNullString(value: any): value is string {
  return value === ''
}

export function isImg(type: string): boolean {
  return !!IMG_FILE_TYPE[type]
}

export function isPDF(type: string): boolean {
  return type === 'application/pdf'
}
