const baseUrl = "https://7b9b-80-240-112-94.ngrok-free.app";

const AuthUrls = {
  forget_password: baseUrl + "/api/auth/forgot-password",
  verify_otp: baseUrl + "/api/auth/verify-otp",
  reset_password: baseUrl + "/api/auth/reset-password",
};

const UserUrls = {
  register: baseUrl + "/api/users/create",
  login: baseUrl + "/api/users/login",
  read: baseUrl + "/api/users/read{email}",
};

export default {
  AuthUrls,
  UserUrls,
};
