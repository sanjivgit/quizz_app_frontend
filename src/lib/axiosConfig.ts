import axios from "axios";
import Cookies from "js-cookie";

const userData = Cookies.get("loginData");
let user: any = "";
if (userData) {
  user = JSON.parse(userData);
}

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",     //// It's your local APIGetway baseUrl
  headers: {
    Authorization: `Bearer ${user?.token}`,
  },
});

export default instance;

