/**
 * @Description: 封装axios请求
 * @author LiChenGuang
 * @date 2019/7/10
*/
import axios from 'axios'
import { message } from 'ant-design-vue'
import Cookie from 'js-cookie'

axios.defaults.timeout = 10000
// axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    const jwt = Cookie.get('jwt');
    // 判断是否是登录请求
    // true
    if(config.url.indexOf('admin-user/login') > -1){
      config.headers = {
        'Content-Type':'application/json;charset=UTF-8',
      }
    }else{
    // false
      // 判断是否有登录token
      if(jwt) {
        config.headers = {
          'Content-Type':'application/json;charset=UTF-8',
          'Authorization': jwt,
        }
      }else{
        config.headers = {
          'Content-Type':'application/json;charset=UTF-8',
        }
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)
//http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log('success',response)
    response.headers.authorization && Cookie.set('jwt',response.headers.authorization)
    return response;
  },
  err => {
    // console.log('fail',err.response)
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break

        case 401:
          break

        case 403:
          break

        case 404:
          break

        case 408:
          break

        case 500:

          break
        case 501:
          err.message = '服务未实现'
          break

        case 502:
          err.message = '网关错误'
          break

        case 503:
          err.message = '服务不可用'
          break

        case 504:
          err.message = '网关超时'
          break

        case 505:
          err.message = 'HTTP版本不受支持'
          break

        default:
      }
    }else{
      err.message = '网络出现问题，请稍后再试'
    }
    message.error(err.message);
    return Promise.reject(err)
  }
)



/**
 * get请求
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get(url,params={}){
    return new Promise((resolve,reject) => {
      axios.get(Util.baseUrl + url,{
        params:params
      })
        .then(response => {
          // 请求成功
          if(response.data.statusCode === 200) {
            // message.success(response.data.statusMessage);
          }else{
            message.error(response.data.statusMessage);
          }

          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
}

/**
 * post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}){
  return new Promise((resolve, reject) => {
    axios.post( Util.baseUrl + url, data)
      .then(response => {

        // 请求成功
        if(response.data.statusCode === 200) {
          message.success(response.data.statusMessage);
        }else{
          message.error(response.data.statusMessage);
        }

        resolve(response.data)

      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 并发请求
 * @param requestLists
 * @returns {Promise<any>}
 */
export function getAll(requestLists = []){
  let counter = 1 // 请求次数
  let maxRequestTimes = 5 // 最大请求次数，因为有可能别个页面就是访问不了，请求多少次也没用- -
  let result = [] // 最后的结果
  let failedList = []
  return new Promise((resolve, reject) => {
    axios.all( requestLists )
      .then(response => {
        result = result.concat(response.filter(i => i)) // filter返回true的时候保留该数组项，因为getDataById的catch里没有给返回值（这里也不需要），这里的resolve里就会有undefined，需要过滤掉
        let failedLength = failedList.length
        if (failedLength > 0 && counter < maxRequestTimes) { // 如果失败列表里有请求，并且请求次数不超过设定的值，就进行下一次请求，并且打出log
          console.log(`第${counter}次请求完成，其中成功${requestLists.length - failedLength}个，失败${failedLength}个，正在进行第${++counter}次请求...`)
          getAll(failedList)
          failedList = [] // 这里要清空failedList，不然会一直调用。不用担心，下一次请求失败的会在getDataById填充到failedList里。
        } else { // 表示所有请求都成功了，或者达到了最大请求次数。到这里就可以对result做进一步处理了。
          console.log(`请求完成，共请求${counter}次, 其中成功${requestLists.length - failedLength}个，失败${failedLength}个\n`, result)
          counter = 1
          resolve(response)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
