import axios from "axios";
import urlsa from "../utils/urls"; // Assuming this file exists and exports the necessary URLs.

const { AuthUrls, UserUrls } = urlsa;
const { login, read, register } = UserUrls;

const AuthService = {
  login: (data) => {
    return axios.post(login, data);
  },
  logout: () => {
    return { success: true };
  },
  regsiter: (data) => {
    return axios.post(register, data);
  },
};

export default AuthService;
