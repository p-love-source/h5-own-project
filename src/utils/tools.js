/**
 * 工具函数
 * **/

/**
 * @param 千分位格式化
 * 1000 ==> 1,000
 * */
export function formatThousand(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}

/**
 * 手机号安全处理
 * */
export function formatMobile(num) {
  num = num + "";
  return `${num.substr(0, 3)}*******${num.substr(num.length - 1)}`;
}

/**
 * @param 超出字符用...代替
 * **/
export function controlStrLen(name, num) {
  if (!name || name.length == 0) return "";
  let str = name.length > num ? name.substr(0, num - 2) + "..." : name;
  return str;
}

/**
 * 获取字符的个数
 * */
export function getLen(val) {
  var str = new String(val);
  var bytesCount = 0;
  for (var i = 0, n = str.length; i < n; i++) {
    var c = str.charCodeAt(i);
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      bytesCount += 1;
    } else {
      bytesCount += 2;
    }
  }
  return bytesCount;
}

/**
 * 函数节流
 * @param {Function} fn 执行函数
 * @param {Number} delay 节流时间
 * */
export function throttle(fn, delay) {
  clearTimeout(fn.tid);
  fn.tid = setTimeout(() => {
    fn.call();
  }, delay || 200);
}

/**
 * 一维数组转换成二维数组
 * @param 数组的值为引用数据类型
 * @param {Array} list 数据源
 * @param {Number} num 二维数组的长度，默认为2
 * */
export function changeArray(list, num = 2) {
  let len = list.length;
  let lineNum = Math.ceil(len / num);
  let midArr = [];
  for (let i = 0; i < lineNum; i++) {
    let mid = list.slice(i * num, i * num + num);
    mid = JSON.parse(JSON.stringify(mid));
    midArr.push(mid);
  }
  // midArr[0][0]["a"] = 100;
  // console.log(midArr);
  return midArr;
}
