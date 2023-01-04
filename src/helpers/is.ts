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

export function isChinaZipCode(value: any) {
  return /^[0-9]{6}$/.test(value)
}

export function isFileName(value: any) {
  return !(new RegExp('[\\\\/:*?\\"<>|]').test(value))
}

// 手机机身码(IMEI)正则表达式
export function isIMEI(value: any) {
  return /^\d{15,17}$/.test(value)
}

// 统一社会信用代码正则表达式
export function isCreditCode(value: any) {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(value)
}

// 带端口的URL网址或IP地址正规表达式
export function isURL(value: any) {
  return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(value)
}

// 带有参数的URL地址正则表达式
export function isURLWithParams(value: any) {
  return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+(\?+[^\s]+)$/.test(value)
}

// 迅雷链接正则表达式
export function isThunder(value: any) {
  return /^thunderx?:\/\/[a-zA-Z\d]+=$/.test(value)
}

// 电驴链接正则表达式
export function isEd2k(value: any) {
  return /^ed2k:\/\/\|file\|.+\|\/$/.test(value)
}

// 磁力链接正则表达式
export function isMagnet(value: any) {
  return /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/.test(value)
}

// 电子邮箱正则表达式
export function isEmail(value: any) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/.test(value)
}

// 中国大陆手机号码正则表达式
export function isChinaMobile(value: any) {
  return /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)
}

// 中国大陆座机号码正则表达式
export function isChinaTel(value: any) {
  return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value)
}

// 中国大陆身份证号码正则表达式
export function isChinaIDCard(value: any) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
}

// 中国大陆邮政编码正则表达式
export function isChinaPostCode(value: any) {
  return /^[1-9][0-9]{5}$/.test(value)
}

// 中国大陆车牌号码正则表达式
export function isChinaCarNumber(value: any) {
  return /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/.test(value)
}

// 中国大陆车架号正则表达式
export function isChinaVIN(value: any) {
  return /^[A-HJ-NPR-Z\d]{17}$/.test(value)
}

// 中国大陆银行卡号正则表达式
export function isChinaBankCard(value: any) {
  return /^([1-9]{1})(\d{14}|\d{18})$/.test(value)
}

// 中国大陆车辆发动机号正则表达式
export function isChinaEngineNumber(value: any) {
  return /^[A-HJ-NPR-Z\d]{6,17}$/.test(value)
}

// 火车车次正则表达式
export function isTrainNumber(value: any) {
  return /^[GCDZTSPKXLY1-9]\d{1,4}$/.test(value)
}

// 车站名称正则表达式
export function isStationName(value: any) {
  return /^[A-Z\u4e00-\u9fa5]+$/.test(value)
}

// 车站简称正则表达式
export function isStationCode(value: any) {
  return /^[A-Z]{3}$/.test(value)
}

// 车站拼音正则表达式
export function isStationPinyin(value: any) {
  return /^[a-z]+$/.test(value)
}

// 车站拼音首字母正则表达式
export function isStationPinyinInitial(value: any) {
  return /^[A-Z]+$/.test(value)
}

// 车站编号正则表达式
export function isStationNumber(value: any) {
  return /^[A-Z]{3}\d{1,4}$/.test(value)
}

// 子网掩码正则表达式
export function isSubnetMask(value: any) {
  return /^((255\.){3}(255|254|252|248|240|224|192|128|0))$/.test(value)
}

// IP地址正则表达式
export function isIP(value: any) {
  return /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(value)
}

// MAC地址正则表达式
export function isMAC(value: any) {
  return /^([A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2}$/.test(value)
}

// win系统"文件夹"路径正则表达式
export function isWinFolderPath(value: any) {
  return /^[a-zA-Z]:\\([a-zA-Z0-9_]+\\)*$/.test(value)
}

// win系统"文件"路径正则表达式
export function isWinFilePath(value: any) {
  return /^[a-zA-Z]:\\([a-zA-Z0-9_]+\\)*[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/.test(value)
}

// win系统"文件名"正则表达式
export function isWinFileName(value: any) {
  return /^[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/.test(value)
}

// win系统"文件夹名"正则表达式
export function isWinFolderName(value: any) {
  return /^[a-zA-Z0-9_]+$/.test(value)
}

// win系统"磁盘名"正则表达式
export function isWinDiskName(value: any) {
  return /^[a-zA-Z]$/.test(value)
}

// win系统"磁盘路径"正则表达式
export function isWinDiskPath(value: any) {
  return /^[a-zA-Z]:\\$/.test(value)
}

// linux系统 文件路径，正则表达式
export function isLinuxFilePath(value: any) {
  return /^\/([a-zA-Z0-9_]+\/)*[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/.test(value)
}

// linux系统 文件夹路径，正则表达式
export function isLinuxFolderPath(value: any) {
  return /^\/([a-zA-Z0-9_]+\/)*$/.test(value)
}

// linux系统 文件名，正则表达式
export function isLinuxFileName(value: any) {
  return /^[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/.test(value)
}

// linux系统 文件夹名，正则表达式
export function isLinuxFolderName(value: any) {
  return /^[a-zA-Z0-9_]+$/.test(value)
}

// linux系统 磁盘路径，正则表达式
export function isLinuxDiskPath(value: any) {
  return /^\/$/.test(value)
}

// linux系统 磁盘名，正则表达式
export function isLinuxDiskName(value: any) {
  return /^[a-zA-Z]$/.test(value)
}

// linux系统 隐藏文件路径 正则表达式
export function isLinuxHiddenFilePath(value: any) {
  return /^\/(?:[^\\/]+\/)*\.[^\\/]+\.[^\\/]*$/.test(value)
}

// linux系统 隐藏文件夹路径 正则表达式
export function isLinuxHiddenFolderPath(value: any) {
  return /^\/(?:[^\\/]+\/)*\.[^\\/]*$/.test(value)
}

// html代码注释，正则表达式
export function isHtmlComment(value: any) {
  return /^<!--[\s\S]*?-->$/m.test(value)
}

// html标签，正则表达式
export function isHtmlTag(value: any) {
  return /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(value)
}

// md5加密格式，正则表达式
export function isMd5(value: any) {
  return /^[a-f0-9]{32}$/.test(value)
}

// sha1加密格式，正则表达式
export function isSha1(value: any) {
  return /^[a-f0-9]{40}$/.test(value)
}

// sha256加密格式，正则表达式
export function isSha256(value: any) {
  return /^[a-f0-9]{64}$/.test(value)
}

// sha512加密格式，正则表达式
export function isSha512(value: any) {
  return /^[a-f0-9]{128}$/.test(value)
}

// x.y.x格式的版本号，正则表达式
export function isVersion(value: any) {
  return /^\d+\.\d+\.\d+$/.test(value)
}

// 16进制颜色，正则表达式
export function isHexColor(value: any) {
  return /^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(value)
}

// rgb颜色，正则表达式
export function isRgbColor(value: any) {
  return /^rgb\((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\)$/.test(value)
}

// rgba颜色，正则表达式
export function isRgbaColor(value: any) {
  return /^rgba\((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(0?\.\d+|1(\.0+)?)\)$/.test(value)
}

// hsl颜色，正则表达式
export function isHslColor(value: any) {
  return /^hsl\((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\)$/.test(value)
}

// hsla颜色，正则表达式
export function isHslaColor(value: any) {
  return /^hsla\((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(0?\.\d+|1(\.0+)?)\)$/.test(value)
}

// hwb颜色，正则表达式
export function isHwbColor(value: any) {
  return /^hwb\((\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]),(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\)$/.test(value)
}

// Apple颜色，正则表达式
export function isAppleColor(value: any) {
  return /^#([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{3})$/.test(value)
}

// 图片链接地址，表达式
export function isImageUrl(value: any) {
  return /\.(gif|jpg|jpeg|png|svg|webp|jfif|bmp|dpg)/i.test(value)
}

// base64 格式，正则表达式
export function isBase64(value: any) {
  return /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i.test(value)
}

// 支持千分位以及负数的数字或货币，正则表达式
export function isCurrency(value: any) {
  return /^-?\d+(,\d{3})*(\.\d{1,2})?$/.test(value)
}

// 正整数不支持千分位的数字或货币金额
export function isCurrencyNoComma(value: any) {
  return /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/.test(value)
}

// 中文姓名正则表达式
export function isChineseName(value: any) {
  return /^(?:[\\u4e00-\\u9fa5·]{2,16})$/.test(value)
}

// 英文姓名正则表达式
export function isEnglishName(value: any) {
  return /^[a-zA-Z\\.\s]{1,40}$/.test(value)
}

// 新能源车牌号，正规表达式
export function isEnergyCarNumber(value: any) {
  return /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/.test(value)
}

// 非新能源车牌号
export function isNotEnergyCarNumber(value: any) {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(value)
}

// 新能源加非新能源车牌号验证
export function isCarNumber(value: any) {
  return isEnergyCarNumber(value) || isNotEnergyCarNumber(value)
}

// 银行卡号
export function isBankCard(value: any) {
  return /^([1-9]{1})(\d{14}|\d{18})$/.test(value)
}

// 身份证号1代（15位数字）
export function isIdCard1(value: any) {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(value)
}

// 身份证号2代（18位数字，最后一位是校验位，可能为数字或字符X）
export function isIdCard2(value: any) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
}

// 身份证号（支持1/2代）
export function isIdCard(value: any) {
  return isIdCard1(value) || isIdCard2(value)
}

// 护照（包含香港、澳门）
export function isPassport(value: any) {
  return /^[a-zA-Z]{5,17}$/.test(value) || /^[a-zA-Z0-9]{5,17}$/.test(value)
}

// 港澳通行证，正则表达式
export function isGAT(value: any) {
  return /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(value)
}

// 台湾通行证，正则表达式
export function isTW(value: any) {
  return /^[0-9]{8}$/.test(value)
}

// 军官证，正则表达式
export function isOfficer(value: any) {
  return /^[a-zA-Z0-9]{7,21}$/.test(value)
}

// 中文/汉字，正则表达式
export function isChinese(value: any) {
  return /^[\u4e00-\u9fa5]+$/.test(value)
}

// qq号码
export function isQQ(value: any) {
  return /^[1-9][0-9]{4,10}$/.test(value)
}

// 微信号
export function isWechat(value: any) {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value)
}

// 大写英文字母
export function isUpperCase(value: any) {
  return /^[A-Z]+$/.test(value)
}

// 小写英文字母
export function isLowerCase(value: any) {
  return /^[a-z]+$/.test(value)
}

// 大小写英文字母
export function isAlphabets(value: any) {
  return /^[A-Za-z]+$/.test(value)
}

// 验证是否为整数
export function isInteger(value: any) {
  return /^[0-9]+$/.test(value)
}

// 数字和大小写英文字母
export function isNA(value: any) {
  return /^[A-Za-z0-9]+$/.test(value)
}

// 数字、大小写英文字母和下划线
export function isNAU(value: any) {
  return /^\w+$/.test(value)
}

// ipv4 地址正规表达式
export function isIpv4(value: any) {
  return /^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(value)
}

// ipv6 地址正规表达式
export function isIpv6(value: any) {
  return /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(value)
}
