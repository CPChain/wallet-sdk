/**
 *  类属性装饰器，把enum转换为realm可识别的存储类型
 */
export function RealmEnum(..._args: any) {}
/**
 *  类属性装饰器，把BigNumber转换为realm可识别的存储类型
 */
export function RealmBigNumber(..._args: any) {}
/**
 *  类属性装饰器，把Object转换为realm数组库可识别的存储类型
 */
export function RealmJson(..._args: any) {}