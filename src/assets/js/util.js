/**
 * @Description: 全局公用方法
 * @author LiChenGuang
 * @date 2019/07/01
 */

(function (window) {
  let Util = {}
  Util.baseUrl = 'http://39.106.209.183:8000/api/admin'
  // Util.baseUrl = 'http://172.16.0.223:8000/api/admin'
  Util.processError = function (vm, res, spe) {
    return false
  }

  /**
   * 作者 李晨光
   * 日期 20190610
   * 处理所有的vue-axios的response 并判断是否成功
   * 2个回调函数, 处理成功和失败
   * @param response
   * @param sucessCallback 成功回调
   * @param failCallback  失败回调
   */
  Util.processRes = function(response, sucessCallback, failCallback) {
    if (sucessCallback){
      sucessCallback.call(response, response.data)
    }
    if (failCallback) {
      failCallback.call(response, response.data)
    }
  }

  Util.propsArrayToString = function (array) {
    let resultArray = []
    for (let i = 0; i < array.length; i++) {
      let current = array[i]
      resultArray.push(current.id + ':' + current.value)
    }
    return resultArray.join(',')
  }

  /**
   *
   * 用后面对象去填充前面对象
  */
  Util.fullObj =function( first={}, second={}, reserve=[]) {
    for ( const key in first ) {
      if ( reserve.includes(key) ) {
        continue;
      } else {
        first[key] = second[key] || '';
      }
    }
  }
  /**
   * 全屏
   */
  Util.toggleFullScreen = function() {
    let doc = window.document
    let docEl = doc.documentElement
    let requestFullScreen =
      docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen
    let cancelFullScreen =
      doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl)
    } else {
      cancelFullScreen.call(doc)
    }
  }

  //设置localStorage
  Util.setLocalStorage = function(key,value){
    localStorage.setItem(key,value);
  }
  Util.getLocalStorage = function(key){
    return localStorage.getItem(key);
  }
  Util.removeLocalStorage = function(key){
    return localStorage.removeItem(key);
  }
  //设置localStorage
  Util.setSessionStorage = function(key,value){
    sessionStorage.setItem(key,value);
  }
  Util.getSessionStorage = function(key){
    return sessionStorage.getItem(key);
  }
  Util.removeSessionStorage = function(key){
    return sessionStorage.removeItem(key);
  }

  Util.Reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^0\.([0][1-9]$))|(^0\.[1-9][0-9]?)|(^0$)/   //费用可为0 0,0.1,0.01，10……
  Util.Reg2 = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^0\.([0][1-9]$))|(^0\.[1-9][0-9]?)/   //费用不能为0  0.1,0.01，10……
  Util.Reg3 = /(^[1-9]([0-9]+)?(\.[0][0]?)?$)|(^0\.0[0]?$)|(^0$)/  //正整数 + 0
  Util.Reg4 = /(^[1-9]([0-9]+)?(\.[0][0]?)?$)|(^0\.0[0]?$)/  //正整数
  Util.Reg5 = /(^[1-9]?$)|(^[1-9]\.[0-9]{1}?$)|(^0\.[1-9]{1}?$)/  //0.1-9.9
  Util.tel = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/ //手机号验证
  Util.age = /^([1-9]|[1-7][0-9]|80)$/ //年龄
  Util.Reg8 = /^([1-9]([0-9]+)?(\.[5][0]?)?$)|(^0\.5[0]?$)/ // 0.5 1.5
  Util.chinese = /^[\u4E00-\u9FA5]+$/ // 中文
  Util.Reg10 = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/  //正负整数 + 0







  window.Util = Util
}) (window)

export default {
  install: function (Vue) {
    Vue.Util
  }
}

