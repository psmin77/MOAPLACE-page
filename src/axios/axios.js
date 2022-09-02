import axios from "axios"
import router from "@/router/index.js"
import store from "@/store/index.js"

const instance = axios.create({
  baseURL: "http://localhost:9090",
  headers: {
    'Access-Control-Allow-Origin' : '*'
  }
});

instance.interceptors.request.use(function(config) {
  // 로그인된 모든 요청 헤더에 토큰 전달.
  let token = localStorage.getItem("access_token");
  if(token != null) {
    config.headers['Authorization'] = token;
  }
  // console.log("interceptor config ", config);
  return config;
})

instance.interceptors.response.use(function(response) {
  // console.log('interceptor response ', response)
  return response;
}, function(error) {
  console.log("interceptor error ", error.response.status);
  if(error.response.status === 401) {
    store.dispatch("login/logout");
    router.push("/moaplace.com/users/login");
    return error;
  }
  return error;
})

export default instance;
