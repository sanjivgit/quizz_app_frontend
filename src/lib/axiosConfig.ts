import axios from "axios";
import Cookies from "js-cookie";

const userData = Cookies.get("quizzLoginData");
let user: any = "";
if (userData) {
  user = JSON.parse(userData);
}

const instance = axios.create({
  baseURL: "http://localhost:2001/api/v1",     //// It's your local APIGetway baseUrl
  headers: {
    authorization: `${user?.token}`,
  },
});

export default instance;

