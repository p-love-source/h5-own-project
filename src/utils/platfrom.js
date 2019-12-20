// 判断所在的浏览器环境
 
const ua = window.navigator.userAgent.toLowerCase()

//  android环境
const isAndroid = () => {
    return /android|adr/i.test(ua)
}
// ios环境
const isIos = () => {
    return /ios|ipad|ipod/i.test(ua)
}
// 微信生态环境
const isWechat = () => {
    return /MicroMessenger/i.test(ua)
}
// annroid客户端 (dianyidian ==> 需要原生添加)
const isInnerAndroid = () => {
    return isAndroid() && /dianyidian/i.test(ua)
}
// ios客户端
const isInnerIos = () => {
    return isIos() && /dianyidian/i.test(ua)
}
// 微信小程序
const isWxmp = () => {
    // window.__wxjs_environment === 'miniprogram' ==> 部分安卓机识别失败 ，==》因为变量注入慢导致获取不到
    return window.__wxjs_environment === 'miniprogram' || /miniprogram/i.test(ua)
}
// 客户端
const isInnerApp = () => {
    return isInnerAndroid() || isInnerIos()
}

export default {
    // android环境
    isAndroid: isAndroid(),
    // ios环境
    isIos: isIos(),
    // 微信生态环境
    isWechat: isWechat(),
    // android客户端
    isInnerAndroid: isInnerAndroid(),
    // ios客户端
    isInnerIos: isInnerIos(),
    // 微信小程序
    isWxmp: isWxmp(),
    // 客户端
    isInnerApp: isInnerApp()
}