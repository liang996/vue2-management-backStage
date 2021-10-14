import axios from 'axios'
import qs from 'qs';

const Base_URL = '/api'


axios.defaults.baseURL = Base_URL
// 获取请求头参数
function getQueryString(key) {
  var after = window.location.search;


  //key存在先通过search取值如果取不到就通过hash来取
  after = after.substr(1) || window.location.hash && window.location.hash.split("?")[1];

  if (after) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = after.match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    } else {
      return null;
    }
  }
}


// 设置请求头参数
axios.defaults.headers = {
  "x-token": localStorage.getItem('key') ? localStorage.getItem('key') : 'Bearer.eyJzdGFyX2xpZmUiOnsiYWNjb3VudE5vbkV4cGlyZWQiOnRydWUsImFjY291bnROb25Mb2NrZWQiOnRydWUsImF1dGhvcml0aWVzIjpbXSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlLCJleHAiOjI1OTIwMDAwMDAsImlhdCI6MTYzMTY5NDcyNzMyNywianRpIjpudWxsLCJwYXNzd29yZCI6bnVsbCwic3ViIjoiYWRtaW4iLCJ1c2VySW5mbyI6bnVsbCwidXNlcm5hbWUiOiJhZG1pbiJ9LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdGFyX2xpZmVfand0Iiwic3Rhcl9saWZlX2NsYWltcyI6ImFkbWluIiwiZXhwIjoxNjM0Mjg2NzI3LCJpYXQiOjE2MzE2OTQ3Mjd9.Cod35IgiaQNJVUrVjGGuKm54-3K-H-HH83PLtEoZcOk'
}

axios.interceptors.request.use(function (config) {

  // 在发送请求之前做些什么 User-Agent
  if (config.method == 'post') {

    // config.data = qs.stringify(config.data)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data) {
    return response.data
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// export function lmplementation (data) {
//   return service.request({
//     method: "get",
//     url: "/order/memOrder/OrderByNo",
//     data,
//   })
// }
//这是配api
export default axios
