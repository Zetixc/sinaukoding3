import axios from "axios";

const axiosInstances = axios.create({
  baseURL: "https://gorest.co.in/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer 4b8f594d42b64d4954588fe3bf0aa6aa6a8d30351506863f201bee7f1402c3ba",
  },
});

export default axiosInstances;
