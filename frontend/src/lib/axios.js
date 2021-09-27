import axios from "axios";

// const DOMAIN = "http://localhost:8080";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

export const requestAll = (method, url, data, headers = {}) => {
  return axios({
    method,
    url,
    data,
    headers,
    // url: DOMAIN + url,
    // headers: { "Access-Control-Allow-Origin": "*"},
  })
    .then((res) => res)
    .catch((err) => console.log(err));
}

export const requestData = (method, url, data, headers = {}) => {
  return axios({
    method,
    url,
    data,
    headers,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}