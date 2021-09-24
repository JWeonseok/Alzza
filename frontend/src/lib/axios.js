import axios from "axios";

// const DOMAIN = "http://localhost:8080";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해

export const requestAll = (method, url, data) => {
  return axios({
    method,
    // url: DOMAIN + url,
    url,
    data,
    headers: { "Access-Control-Allow-Origin": "*"},
  })
    .then((res) => res)
    .catch((err) => console.log(err));
}

export const requestData = (method, url, data) => {
  return axios({
    method,
    // url: DOMAIN + url,
    url,
    data,
    headers: { "Access-Control-Allow-Origin": "*"},
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}